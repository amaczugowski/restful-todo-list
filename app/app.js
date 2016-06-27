'use strict';

var app = angular.module('todoApp', ['ngRoute', 'list']);

app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        // need to finish this
        $routeProvider.
        when('/list', {
            template: '<list></list>'
        }).
        otherwise('/list');
    }
]);
