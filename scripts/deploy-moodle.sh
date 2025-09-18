#!/bin/bash

# TAG Moodle Learning Management System Deployment Script
# This script installs and configures Moodle for TAG e-learning platform

set -e  # Exit on any error

echo "🎓 Starting TAG Moodle LMS Deployment..."

# Configuration
MOODLE_VERSION="4.3"
MOODLE_DOMAIN="learning.transportactiongroup.com"
MOODLE_DIR="/var/www/moodle"
MOODLE_DATA="/var/moodledata"
DB_NAME="moodle"
DB_USER="moodleuser"
ADMIN_USER="admin"
ADMIN_EMAIL="transportactiongroup@gmail.com"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   print_error "This script must be run as root (use sudo)"
   exit 1
fi

# Generate secure passwords
DB_PASSWORD=$(openssl rand -base64 32)
ADMIN_PASSWORD=$(openssl rand -base64 16)
SALT=$(openssl rand -base64 32)

print_step "1. Installing system dependencies..."
apt-get update
apt-get install -y apache2 postgresql postgresql-contrib php8.1 php8.1-fpm php8.1-cli php8.1-mysql php8.1-pgsql php8.1-xml php8.1-mbstring php8.1-curl php8.1-zip php8.1-gd php8.1-intl php8.1-soap php8.1-xmlrpc php8.1-ldap php8.1-redis unzip wget curl git

# Enable Apache modules
a2enmod rewrite ssl headers expires deflate php8.1

print_step "2. Setting up PostgreSQL database..."
sudo -u postgres createuser -D -A -P $DB_USER << EOF
$DB_PASSWORD
$DB_PASSWORD
EOF

sudo -u postgres createdb -O $DB_USER $DB_NAME

print_step "3. Downloading and installing Moodle..."
cd /tmp
wget https://download.moodle.org/download.php/direct/stable403/moodle-${MOODLE_VERSION}.tgz
tar -xzf moodle-${MOODLE_VERSION}.tgz
mv moodle $MOODLE_DIR

# Create moodle data directory
mkdir -p $MOODLE_DATA
chown -R www-data:www-data $MOODLE_DATA
chmod -R 755 $MOODLE_DATA

# Set permissions for Moodle directory
chown -R www-data:www-data $MOODLE_DIR
chmod -R 755 $MOODLE_DIR

print_step "4. Creating Moodle configuration..."
cat > $MOODLE_DIR/config.php << EOF
<?php  // Moodle configuration file

unset(\$CFG);
global \$CFG;
\$CFG = new stdClass();

// Database configuration
\$CFG->dbtype    = 'pgsql';
\$CFG->dblibrary = 'native';
\$CFG->dbhost    = 'localhost';
\$CFG->dbname    = '$DB_NAME';
\$CFG->dbuser    = '$DB_USER';
\$CFG->dbpass    = '$DB_PASSWORD';
\$CFG->prefix    = 'mdl_';
\$CFG->dboptions = array(
    'dbpersist' => false,
    'dbsocket'  => false,
    'dbport'    => '',
    'dbhandlesoptions' => false,
    'dbcollation' => 'utf8_unicode_ci',
);

// Site configuration
\$CFG->wwwroot   = 'https://$MOODLE_DOMAIN';
\$CFG->dataroot  = '$MOODLE_DATA';
\$CFG->directorypermissions = 02777;
\$CFG->admin     = 'admin';

// Security settings
\$CFG->passwordsaltmain = '$SALT';

// Performance settings
\$CFG->cachejs = true;
\$CFG->cachetemplates = true;
\$CFG->langstringcache = true;

// SSL settings
\$CFG->sslproxy = true;

// TAG-specific settings
\$CFG->custommenuitems = '
Transport Action Group|https://www.transportactiongroup.com
Professional Registry|https://www.transportactiongroup.com/search
Books|https://www.transportactiongroup.com/books
Contact|https://www.transportactiongroup.com/contact
';

// Email settings
\$CFG->smtphosts = 'smtp.gmail.com:587';
\$CFG->smtpsecure = 'tls';
\$CFG->smtpuser = '$ADMIN_EMAIL';
\$CFG->smtppass = 'your_email_password_here';
\$CFG->smtpmaxbulk = 1;
\$CFG->noreplyaddress = 'noreply@transportactiongroup.com';

// Course settings
\$CFG->defaultcity = 'Durban';
\$CFG->country = 'ZA';
\$CFG->timezone = 'Africa/Johannesburg';

// Payment gateway settings
\$CFG->enablepaymentgateways = true;

// TAG API integration
\$CFG->tag_api_base = 'https://api.transportactiongroup.com';
\$CFG->tag_website_url = 'https://www.transportactiongroup.com';

require_once(__DIR__ . '/lib/setup.php');
EOF

print_step "5. Installing SSO authentication plugin..."
mkdir -p $MOODLE_DIR/auth/sso
cp ../moodle/auth/sso/auth.php $MOODLE_DIR/auth/sso/

# Create version.php for the plugin
cat > $MOODLE_DIR/auth/sso/version.php << EOF
<?php
defined('MOODLE_INTERNAL') || die();

\$plugin->version   = 2024090200;        // The current plugin version (Date: YYYYMMDDXX)
\$plugin->requires  = 2023100900;        // Requires this Moodle version
\$plugin->component = 'auth_sso';        // Full name of the plugin (used for diagnostics)
\$plugin->maturity  = MATURITY_STABLE;
\$plugin->release   = '1.0';
EOF

# Create language file
mkdir -p $MOODLE_DIR/auth/sso/lang/en
cat > $MOODLE_DIR/auth/sso/lang/en/auth_sso.php << EOF
<?php
\$string['pluginname'] = 'TAG SSO Authentication';
\$string['auth_ssodescription'] = 'Single Sign-On integration with TAG website';
\$string['tag_api_base'] = 'TAG API Base URL';
\$string['tag_website_url'] = 'TAG Website URL';
EOF

print_step "6. Configuring Apache virtual host..."
cat > /etc/apache2/sites-available/$MOODLE_DOMAIN.conf << EOF
<VirtualHost *:80>
    ServerName $MOODLE_DOMAIN
    DocumentRoot $MOODLE_DIR
    
    <Directory $MOODLE_DIR>
        Options -Indexes
        AllowOverride All
        Require all granted
    </Directory>
    
    # Security headers
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options SAMEORIGIN
    Header always set X-XSS-Protection "1; mode=block"
    
    # PHP settings
    php_value upload_max_filesize 100M
    php_value post_max_size 100M
    php_value max_execution_time 300
    php_value memory_limit 512M
    
    ErrorLog \${APACHE_LOG_DIR}/$MOODLE_DOMAIN-error.log
    CustomLog \${APACHE_LOG_DIR}/$MOODLE_DOMAIN-access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName $MOODLE_DOMAIN
    DocumentRoot $MOODLE_DIR
    
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/$MOODLE_DOMAIN/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/$MOODLE_DOMAIN/privkey.pem
    
    <Directory $MOODLE_DIR>
        Options -Indexes
        AllowOverride All
        Require all granted
    </Directory>
    
    # Security headers
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options SAMEORIGIN
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
    
    # PHP settings
    php_value upload_max_filesize 100M
    php_value post_max_size 100M
    php_value max_execution_time 300
    php_value memory_limit 512M
    
    ErrorLog \${APACHE_LOG_DIR}/$MOODLE_DOMAIN-ssl-error.log
    CustomLog \${APACHE_LOG_DIR}/$MOODLE_DOMAIN-ssl-access.log combined
</VirtualHost>
EOF

# Enable the site
a2ensite $MOODLE_DOMAIN.conf
a2dissite 000-default.conf
systemctl reload apache2

print_step "7. Running Moodle installation..."
cd $MOODLE_DIR
sudo -u www-data php admin/cli/install.php \
    --lang=en \
    --wwwroot=https://$MOODLE_DOMAIN \
    --dataroot=$MOODLE_DATA \
    --dbtype=pgsql \
    --dbhost=localhost \
    --dbname=$DB_NAME \
    --dbuser=$DB_USER \
    --dbpass=$DB_PASSWORD \
    --prefix=mdl_ \
    --fullname="Transport Action Group Learning Management System" \
    --shortname="TAG LMS" \
    --adminuser=$ADMIN_USER \
    --adminpass=$ADMIN_PASSWORD \
    --adminemail=$ADMIN_EMAIL \
    --non-interactive \
    --agree-license

print_step "8. Configuring TAG-specific settings..."
# Enable SSO authentication
sudo -u www-data php admin/cli/cfg.php --name=auth --set=manual,sso

# Set up courses
sudo -u www-data php << EOF
<?php
require_once('config.php');
require_once(\$CFG->libdir.'/adminlib.php');

// Create course categories
\$category1 = new stdClass();
\$category1->name = 'Professional Driver Training';
\$category1->description = 'Certification programs for professional truck drivers';
\$category1->parent = 0;
\$category1->sortorder = 1;
\$category1->id = \$DB->insert_record('course_categories', \$category1);

\$category2 = new stdClass();
\$category2->name = 'Green Freight Management';
\$category2->description = 'Advanced training for fleet managers and executives';
\$category2->parent = 0;
\$category2->sortorder = 2;
\$category2->id = \$DB->insert_record('course_categories', \$category2);

// Create courses
\$course1 = new stdClass();
\$course1->fullname = 'Professional Truck Driving Program';
\$course1->shortname = 'PTDP';
\$course1->category = \$category1->id;
\$course1->summary = 'Comprehensive 20-module certification program for professional truck drivers';
\$course1->format = 'topics';
\$course1->numsections = 20;
\$course1->startdate = time();
\$course1->timecreated = time();
\$course1->timemodified = time();
\$course1->id = \$DB->insert_record('course', \$course1);

\$course2 = new stdClass();
\$course2->fullname = 'Green Freight Professional Program';
\$course2->shortname = 'GFPP';
\$course2->category = \$category2->id;
\$course2->summary = 'Advanced 20-module certification for sustainable freight management';
\$course2->format = 'topics';
\$course2->numsections = 20;
\$course2->startdate = time();
\$course2->timecreated = time();
\$course2->timemodified = time();
\$course2->id = \$DB->insert_record('course', \$course2);

echo "Courses created successfully\n";
EOF

print_step "9. Setting up SSL certificate..."
# Install Certbot if not already installed
if ! command -v certbot &> /dev/null; then
    apt-get install -y certbot python3-certbot-apache
fi

# Get SSL certificate
certbot --apache -d $MOODLE_DOMAIN --non-interactive --agree-tos --email $ADMIN_EMAIL

print_step "10. Setting up cron job..."
# Add Moodle cron job
(crontab -u www-data -l 2>/dev/null; echo "*/5 * * * * /usr/bin/php $MOODLE_DIR/admin/cli/cron.php >/dev/null 2>&1") | crontab -u www-data -

print_step "11. Final security hardening..."
# Remove installation files
rm -f $MOODLE_DIR/install.php
rm -rf $MOODLE_DIR/install/

# Set final permissions
chown -R www-data:www-data $MOODLE_DIR
chown -R www-data:www-data $MOODLE_DATA
find $MOODLE_DIR -type f -exec chmod 644 {} \;
find $MOODLE_DIR -type d -exec chmod 755 {} \;
find $MOODLE_DATA -type f -exec chmod 644 {} \;
find $MOODLE_DATA -type d -exec chmod 755 {} \;

# Restart services
systemctl restart apache2
systemctl restart postgresql

print_status "🎉 Moodle deployment completed successfully!"
echo ""
echo "📋 Deployment Summary:"
echo "   • Moodle URL: https://$MOODLE_DOMAIN"
echo "   • Admin Username: $ADMIN_USER"
echo "   • Admin Password: $ADMIN_PASSWORD"
echo "   • Database: $DB_NAME"
echo "   • Database User: $DB_USER"
echo "   • Database Password: $DB_PASSWORD"
echo ""
echo "🔐 IMPORTANT: Save these credentials securely!"
echo ""
echo "🔗 Next Steps:"
echo "   1. Login to Moodle admin: https://$MOODLE_DOMAIN/login/"
echo "   2. Configure payment gateway (Stripe)"
echo "   3. Upload course content (40 video modules)"
echo "   4. Create assessment questions (200 total)"
echo "   5. Test SSO integration with main website"
echo "   6. Configure email settings with your SMTP credentials"
echo ""
echo "📚 Course Structure Created:"
echo "   • Professional Truck Driving Program (20 modules, \$99)"
echo "   • Green Freight Professional Program (20 modules, \$199)"

# Save credentials to file
cat > /root/moodle-credentials.txt << EOF
Moodle Deployment Credentials
=============================
Date: $(date)

Moodle URL: https://$MOODLE_DOMAIN
Admin Username: $ADMIN_USER
Admin Password: $ADMIN_PASSWORD

Database Name: $DB_NAME
Database User: $DB_USER
Database Password: $DB_PASSWORD

Salt: $SALT

IMPORTANT: Keep this file secure and delete after copying credentials to password manager.
EOF

print_warning "📄 Credentials saved to: /root/moodle-credentials.txt"
print_warning "🔒 Please copy these credentials to a secure location and delete the file."

exit 0

