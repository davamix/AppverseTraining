(function () {
    'use strict';
    angular.module('App.Controllers', []);
    angular.module('appversesamplesApp', [
        'appverse.rest',
        'ngAnimate',
        'ui.bootstrap',
        'angularRipple',
        'ui.select',
        'ngSanitize',
        'rzModule',
        'rt.resize',
        'chart.js',
        'appverse.router',
        'App.Controllers',
        'appverse'
    ]).run(function ($log) {
        $log.debug('appversesamplesApp run');
    });
    AppInit.setConfig({
        environment: {
            'REST_CONFIG': {
                'BaseUrl': '/api',
                'RequestSuffix': ''
            }
        },
        appverseMobile: {},
        mobileBrowser: {}
    });
}());