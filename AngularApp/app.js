var app = angular.module('artistsearch',['ngRoute','chieffancypants.loadingBar']);
app.config(function($routeProvider) {
        $routeProvider
            .when('/search', {
                templateUrl : 'views/result.html',
                controller  : 'searchController'
              
            })
       .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController'

         })
    });
