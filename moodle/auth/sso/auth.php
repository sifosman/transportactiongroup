<?php
/**
 * TAG SSO Authentication Plugin
 * 
 * This plugin handles Single Sign-On integration between the TAG React website
 * and Moodle learning management system.
 */

defined('MOODLE_INTERNAL') || die();

require_once($CFG->libdir.'/authlib.php');

class auth_plugin_sso extends auth_plugin_base {

    /**
     * Constructor.
     */
    function __construct() {
        $this->authtype = 'sso';
        $this->config = get_config('auth_sso');
    }

    /**
     * Returns true if the username and password work and false if they are
     * wrong or don't exist.
     *
     * @param string $username The username
     * @param string $password The password
     * @return bool Authentication success or failure.
     */
    function user_login($username, $password) {
        global $CFG, $DB;
        
        // Check if this is an SSO token login
        if (strpos($password, 'sso_token:') === 0) {
            $token = substr($password, 10); // Remove 'sso_token:' prefix
            return $this->validate_sso_token($username, $token);
        }
        
        // Regular password authentication
        if ($user = $DB->get_record('user', array('username'=>$username, 'deleted'=>0, 'mnethostid'=>$CFG->mnet_localhost_id))) {
            return validate_internal_user_password($user, $password);
        }
        return false;
    }

    /**
     * Validate SSO token from TAG website
     *
     * @param string $username The username
     * @param string $token The SSO token
     * @return bool Token validation result
     */
    private function validate_sso_token($username, $token) {
        global $CFG;
        
        // Make API call to TAG website to validate token
        $api_url = $CFG->tag_api_base . '/auth/validate-token';
        
        $data = array(
            'username' => $username,
            'token' => $token
        );
        
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/json\r\n",
                'method'  => 'POST',
                'content' => json_encode($data)
            )
        );
        
        $context = stream_context_create($options);
        $result = file_get_contents($api_url, false, $context);
        
        if ($result !== FALSE) {
            $response = json_decode($result, true);
            return isset($response['valid']) && $response['valid'] === true;
        }
        
        return false;
    }

    /**
     * Updates the user's password.
     *
     * @param  object  $user        User table object
     * @param  string  $newpassword Plaintext password
     * @return boolean result
     */
    function user_update_password($user, $newpassword) {
        $user = get_complete_user_data('id', $user->id);
        // This will also update the stored hash to the latest algorithm
        // if the existing hash is using an out-of-date algorithm (or the
        // legacy md5 algorithm).
        return update_internal_user_password($user, $newpassword);
    }

    function prevent_local_passwords() {
        return false;
    }

    /**
     * Returns true if this authentication plugin is 'internal'.
     *
     * @return bool
     */
    function is_internal() {
        return true;
    }

    /**
     * Returns true if this authentication plugin can change the user's
     * password.
     *
     * @return bool
     */
    function can_change_password() {
        return true;
    }

    /**
     * Returns the URL for changing the user's pw, or empty if the default can
     * be used.
     *
     * @return moodle_url
     */
    function change_password_url() {
        return null;
    }

    /**
     * Returns true if plugin allows resetting of internal password.
     *
     * @return bool
     */
    function can_reset_password() {
        return true;
    }

    /**
     * Returns true if plugin can be manually set.
     *
     * @return bool
     */
    function can_be_manually_set() {
        return true;
    }

    /**
     * Prints a form for configuring this authentication plugin.
     *
     * This function is called from admin/auth.php, and outputs a full page with
     * a form for configuring this plugin.
     *
     * @param array $page An object containing all the data for this page.
     */
    function config_form($config, $err, $user_fields) {
        include "config.html";
    }

    /**
     * Processes and stores configuration data for this authentication plugin.
     */
    function process_config($config) {
        // Set to defaults if undefined
        if (!isset($config->tag_api_base)) {
            $config->tag_api_base = 'https://api.transportactiongroup.com';
        }
        if (!isset($config->tag_website_url)) {
            $config->tag_website_url = 'https://www.transportactiongroup.com';
        }

        // Save settings
        set_config('tag_api_base', $config->tag_api_base, 'auth_sso');
        set_config('tag_website_url', $config->tag_website_url, 'auth_sso');

        return true;
    }

    /**
     * Hook for overriding behaviour of login page.
     * This method is called from login/index.php page for all enabled auth plugins.
     */
    function loginpage_hook() {
        global $frm;  // can be used to override submitted login form

        // Check for SSO token in URL
        if (isset($_GET['sso_token']) && isset($_GET['username'])) {
            $frm = new stdClass();
            $frm->username = $_GET['username'];
            $frm->password = 'sso_token:' . $_GET['sso_token'];
        }
    }

    /**
     * Post authentication hook.
     * This method is called from authenticate_user_login() for all enabled auth plugins.
     *
     * @param object $user user object, later used for $USER
     * @param string $username (with system magic quotes)
     * @param string $password plain text password (with system magic quotes)
     */
    function user_authenticated_hook(&$user, $username, $password) {
        // Sync user data with TAG website if needed
        if (strpos($password, 'sso_token:') === 0) {
            $this->sync_user_data($user);
        }
    }

    /**
     * Sync user data with TAG website
     *
     * @param object $user Moodle user object
     */
    private function sync_user_data($user) {
        global $CFG, $DB;
        
        // Get user data from TAG API
        $api_url = $CFG->tag_api_base . '/users/' . $user->username;
        
        $options = array(
            'http' => array(
                'header'  => "Content-type: application/json\r\n",
                'method'  => 'GET'
            )
        );
        
        $context = stream_context_create($options);
        $result = file_get_contents($api_url, false, $context);
        
        if ($result !== FALSE) {
            $tag_user = json_decode($result, true);
            
            // Update user data if needed
            $update_needed = false;
            
            if (isset($tag_user['email']) && $user->email !== $tag_user['email']) {
                $user->email = $tag_user['email'];
                $update_needed = true;
            }
            
            if (isset($tag_user['firstname']) && $user->firstname !== $tag_user['firstname']) {
                $user->firstname = $tag_user['firstname'];
                $update_needed = true;
            }
            
            if (isset($tag_user['lastname']) && $user->lastname !== $tag_user['lastname']) {
                $user->lastname = $tag_user['lastname'];
                $update_needed = true;
            }
            
            if ($update_needed) {
                $DB->update_record('user', $user);
            }
        }
    }
}

