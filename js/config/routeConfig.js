angular.module('ikbaseApp').config(function ($routeProvider) {
    
    $routeProvider.when('/login', {
        templateUrl: './view/Login/login.html',
        controller: 'loginController'
    });
    $routeProvider.when('/feed', {
        templateUrl: './view/Feed/feed.html',
        controller: 'feedController'
    })
    $routeProvider.otherwise({ redirectTo: '/login' });
})