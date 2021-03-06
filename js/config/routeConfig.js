angular.module('ikbaseApp').config(function ($routeProvider) {
    
    $routeProvider.when('/registrar', {
        templateUrl: './view/Login/login.html'
    });
    $routeProvider.when('/user', {
        templateUrl: './view/User/profile.html',
        controller: 'usuarioController'
    });
    $routeProvider.when('/feed', {
        templateUrl: './view/Feed/feed.html',
        controller: 'comentarioController'
    });
    $routeProvider.when('/post', {
        templateUrl: './view/Tela/post.html',
        controller: 'feedController'
    });
    $routeProvider.when('/perfil', {
        templateUrl: './view/User/profile.html',
        controller: 'usuarioController'
    });
    $routeProvider.otherwise({ redirectTo: '/post' });
})