<?php
return [
    '*' => [
        /*
         * Enable for all users
         */
        //'enabled'             => true,
        /*
         * Or specifically logged in/anon users
         */
        'enabled'             => [
            'loggedIn'  => true,
            'anonymous' => true,
        ],

        /*
         * Enable logging
         */
        'enableLogging'          => true,

        /*
         * Don't redirect bots/crawlers like GoogleBot, Bing etc.
         */
        'ignoreBots'          => true,

        /*
         * Add any special URL segments you want to ignore
         * Eg. 'ignoreSegments' => [
         *     'this/page/only/exists/in/one/site',
         *     'global-page'
         * ],
         */
        'ignoreSegments'      => [ ],

        /*
         * Cookie name
         */
        'cookieName'          => 'countryRedirect',

        /*
         * The URL parameter that let a user manually select which locale they want to see
         */
        'overrideLocaleParam' => 'selected-locale',

        /*
         * The URL parameter that indicates that a user was redirect
         */
        'redirectedParam' => 'redirected',

        /*
         * Map a countrys two-letter ISO code to a Craft Site Handle, and/or define a catch-all with a * asterix
         * Here is a list of ISO country codes: http://www.nationsonline.org/oneworld/country_code_list.htm
         * Example:
         * 'countryMap'       => [
         *   'FR' => 'frenchSite',
         *   'DK' => 'danishSite',
         *   // You can also send visitors to an arbitrary URL
         *   'DE' => 'http://google.de',
         *   '*' => 'default',
         * ]
         *
         * If you within a country have different regional languages, you can map the different languages to sites by their Site Handle.
         * Take Switzerland, with German, French, Italian and Romansh, as an example:
         *
         * 'countryMap'       => [
         *   'CH' => [
         *     'fr' => 'frenchSite',
         *     'de' => 'germanSite',
         *   ],
         *   '*' => 'default',
         * ]
         *
         * This works by checking the Accept-Language header of the browser.
         *
         */
        'countryMap'          => [ ],

        /*
         * If you want to show a banner that prompts visitors to their matching site handle instead of redirecting them,
         * you can define these here.
         *
         * The key here is the Craft Site Handle, not the country code. The variables {countryName} and {url} will
         * be replaced.
         *
         * 'banners' => [
         *   'frenchSite' => 'It looks like your visiting from {countryName}. Do you <a href="{url}">want to visited the international site?</a>'
         * ],
         */
        'banners'             => [ ],

        /*
         * Override the detected IP - useful for testing, or when no IP address can be detected
         */
        'overrideIp'          => null,
    ],
];