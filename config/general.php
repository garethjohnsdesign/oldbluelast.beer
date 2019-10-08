<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether "index.php" should be visible in URLs
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'brew',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),
        
        'enableTemplateCaching' => false,
        
        'extraAllowedFileExtensions' => 'kmz',
        
    ],

    // Dev environment settings
    'dev' => [
        // Base site URL
        'siteUrl' => 'https://oldbluelast.test',
        'shopUrl' => 'https://oldbluelast.test',

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        
        'enableTemplateCaching' => false,
    ],

    // Staging environment settings
    'staging' => [
        // Base site URL
        'siteUrl' => 'https://oblb-staging.frb.io',
        'shopUrl' => 'https://oblb-staging.frb.io',

        'devMode' => true,
    ],

    // Production environment settings
    'production' => [
        // Base site URL
        'siteUrl' => 'https://www.oldbluelast.beer',
        'shopUrl' => 'https://shop.oldbluelast.beer',

        'devMode' => false,
    ],
    

];



