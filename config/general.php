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

        'smallbreakpoint' => '1400',

        'breakpoints' => [
                'small' => '640',
                'medium' => '1024',
                'large' => '1440',
                'xlarge' => '1440',
                'xxlarge' => '1440',
        ],

        'breakpointsContained' => [
                'small' => '640',
                'medium' => '1024',
                'large' => '1200',
                'xlarge' => '1200',
                'xxlarge' => '1200',
        ],

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),
        
        'enableTemplateCaching' => false,
        
        'extraAllowedFileExtensions' => 'kmz',

        // Set the environmental variables
        'environmentVariables' => array(
            'staticAssetsVersion' => '01',
        ),
        
    ],

    // Dev environment settings
    'dev' => [
        // Base site URL
        'siteUrl' => 'http://oldbluelast.test',
        'shopUrl' => 'http://oldbluelast.test',

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'allowAutoUpdates' => true,
        'enableTemplateCaching' => false,
        // Set the environmental variables
        'environmentVariables' => array(
            'staticAssetsVersion' => time(),
        ),
    ],

    // Staging environment settings
    'staging' => [
        // Base site URL
        'siteUrl' => 'https://oblb-staging.frb.io',
        'shopUrl' => 'https://oblb-staging.frb.io',

        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowAutoUpdates' => false,
        // Set the environmental variables
        'environmentVariables' => array(
            'staticAssetsVersion' => time(),
        ),
    ],

    // Production environment settings
    'production' => [
        // Base site URL
        'siteUrl' => 'https://www.oldbluelast.beer',
        'shopUrl' => 'https://shop.oldbluelast.beer',

        'devMode' => false,
        'enableTemplateCaching' => true,
        'allowAutoUpdates' => false,
    ],
    

];



