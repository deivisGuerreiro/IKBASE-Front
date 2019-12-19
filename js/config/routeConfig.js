angular.module('ikbaseApp').config(function ($routeProvider) {
    
    $routeProvider.when('/registrar', {
        templateUrl: './view/Login/login.html',
        controller: 'loginController'
    });
    $routeProvider.when('/user', {
        templateUrl: './view/User/profile.html',
        controller: 'usuarioController'
    })
    $routeProvider.when('/feed', {
        templateUrl: './view/Tela/nSei.html',
        controller: 'feedController'
    })
    $routeProvider.otherwise({ redirectTo: '/feed' });
})