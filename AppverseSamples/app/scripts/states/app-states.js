//////////////////////////////////////////////////
// The main module configuration section shows  //
// how to define when (redirects) and otherwise //
// (invalid urls) to arrangesite navigation     //
// using ui-router.                             //
//////////////////////////////////////////////////

'use strict';

angular.module('appversesamplesApp')
    .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

                ///////////////////////////////
                // 1-Redirects and Otherwise //
                ///////////////////////////////

                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider

                // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
                // Here we are just setting up some convenience urls.
                //                .when('/t?id', '/topics/:id')
                //                    .when('/t/:id', '/topics/:id')


                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                    .otherwise('/home');


                //////////////////////////
                // 2-State Configurations
                // Several states hav been configured:
                // home
                // tasks
                //
                //////////////////////////

                // We must configure states using $stateProvider.
                    $stateProvider.state('todo', {url: '/todo',templateUrl: 'views/todo/todo.html',controller: 'todoController'})

                //////////
                // Home //
                //////////

                    .state("home", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/home",
                    templateUrl: 'views/home.html'

                })

                .state("theme", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/theme",
                    templateUrl: 'views/theme.html'

                })

                   .state("components", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/components",
                    templateUrl: 'views/components.html',
                    controller: 'ComponentsController'
                })

                  .state("charts", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/charts",
                    templateUrl: 'views/charts.html',
                    controller: 'ChartsController'
                })

                ;
            }]);
