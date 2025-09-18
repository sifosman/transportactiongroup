<?php  // Moodle configuration file

unset($CFG);
global $CFG;
$CFG = new stdClass();

// Database configuration
$CFG->dbtype    = 'pgsql';      // 'pgsql', 'mariadb', 'mysqli', 'mssql', 'sqlsrv' or 'oci'
$CFG->dblibrary = 'native';     // 'native' only at the moment
$CFG->dbhost    = 'localhost';  // eg 'localhost' or 'db.isp.com' or IP
$CFG->dbname    = 'moodle';     // database name, eg moodle
$CFG->dbuser    = 'moodleuser'; // your database username
$CFG->dbpass    = 'your_secure_password_here'; // your database password
$CFG->prefix    = 'mdl_';       // prefix to use for all table names
$CFG->dboptions = array(
    'dbpersist' => false,       // should persistent database connections be used?
    'dbsocket'  => false,       // should connection via UNIX socket be used?
    'dbport'    => '',          // the TCP port number to use when connecting to the server
    'dbhandlesoptions' => false,// On PostgreSQL poolers like pgbouncer don't support advanced options
    'dbcollation' => 'utf8mb4_unicode_ci', // MySQL has partial and full UTF-8 support
);

// Site configuration
$CFG->wwwroot   = 'https://learning.transportactiongroup.com';
$CFG->dataroot  = '/var/moodledata';
$CFG->directorypermissions = 02777;
$CFG->admin     = 'admin';

// Security settings
$CFG->passwordsaltmain = 'your_random_salt_here_change_this';

// Performance settings
$CFG->cachejs = true;
$CFG->cachetemplates = true;
$CFG->langstringcache = true;

// SSL settings
$CFG->sslproxy = true;

// TAG-specific settings
$CFG->custommenuitems = '
Transport Action Group|https://www.transportactiongroup.com
Professional Registry|https://www.transportactiongroup.com/search
Books|https://www.transportactiongroup.com/books
Contact|https://www.transportactiongroup.com/contact
';

// Custom theme settings
$CFG->theme = 'tag_custom';
$CFG->themedir = $CFG->dirroot . '/theme';

// Email settings
$CFG->smtphosts = 'smtp.gmail.com:587';
$CFG->smtpsecure = 'tls';
$CFG->smtpuser = 'transportactiongroup@gmail.com';
$CFG->smtppass = 'your_email_password_here';
$CFG->smtpmaxbulk = 1;
$CFG->noreplyaddress = 'noreply@transportactiongroup.com';

// Course settings
$CFG->defaultcity = 'Durban';
$CFG->country = 'ZA';
$CFG->timezone = 'Africa/Johannesburg';

// Payment gateway settings
$CFG->enablepaymentgateways = true;

// Custom authentication
$CFG->auth = 'manual,sso';

// Session settings
$CFG->sessiontimeout = 7200; // 2 hours

require_once(__DIR__ . '/lib/setup.php');
// There is no php closing tag in this file,
// it is intentional because it prevents trailing whitespace problems!

