#!/bin/bash

# TAG Website Frontend Deployment Script
# This script deploys the React frontend to your web server

set -e  # Exit on any error

echo "🚀 Starting TAG Website Frontend Deployment..."

# Configuration
DOMAIN="www.transportactiongroup.com"
BUILD_DIR="./frontend/dist"
BACKUP_DIR="/var/backups/tag-website"
WEB_ROOT="/var/www/html"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
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

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root for security reasons"
   exit 1
fi

# Check if build directory exists
if [ ! -d "$BUILD_DIR" ]; then
    print_error "Build directory $BUILD_DIR not found. Please run 'npm run build' first."
    exit 1
fi

# Create backup directory if it doesn't exist
print_status "Creating backup directory..."
sudo mkdir -p "$BACKUP_DIR"

# Backup existing website if it exists
if [ -d "$WEB_ROOT" ] && [ "$(ls -A $WEB_ROOT)" ]; then
    print_status "Backing up existing website..."
    BACKUP_NAME="backup-$(date +%Y%m%d-%H%M%S)"
    sudo cp -r "$WEB_ROOT" "$BACKUP_DIR/$BACKUP_NAME"
    print_status "Backup created: $BACKUP_DIR/$BACKUP_NAME"
fi

# Deploy new website
print_status "Deploying new website files..."
sudo rm -rf "$WEB_ROOT"/*
sudo cp -r "$BUILD_DIR"/* "$WEB_ROOT/"

# Set proper permissions
print_status "Setting file permissions..."
sudo chown -R www-data:www-data "$WEB_ROOT"
sudo find "$WEB_ROOT" -type d -exec chmod 755 {} \;
sudo find "$WEB_ROOT" -type f -exec chmod 644 {} \;

# Create .htaccess for React Router (if using Apache)
print_status "Creating .htaccess for React Router..."
sudo tee "$WEB_ROOT/.htaccess" > /dev/null <<EOF
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.transportactiongroup.com https://learning.transportactiongroup.com"

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
EOF

# Test website accessibility
print_status "Testing website deployment..."
if curl -f -s "http://localhost" > /dev/null; then
    print_status "✅ Website is accessible locally"
else
    print_warning "⚠️  Website may not be accessible. Check web server configuration."
fi

# SSL Certificate setup reminder
print_warning "📋 Post-deployment checklist:"
echo "   1. Ensure SSL certificate is installed for $DOMAIN"
echo "   2. Update DNS records to point to this server"
echo "   3. Test website at https://$DOMAIN"
echo "   4. Verify Moodle integration is working"
echo "   5. Test payment processing in production mode"

print_status "🎉 Frontend deployment completed successfully!"
print_status "Website files deployed to: $WEB_ROOT"
print_status "Backup location: $BACKUP_DIR"

# Display next steps
echo ""
echo "🔗 Next Steps:"
echo "   • Configure SSL: sudo certbot --apache -d $DOMAIN"
echo "   • Test website: https://$DOMAIN"
echo "   • Deploy Moodle: ./deploy-moodle.sh"
echo "   • Configure payment gateway in production"

exit 0

