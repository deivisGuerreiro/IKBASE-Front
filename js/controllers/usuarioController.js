angular.module('ikbaseApp').controller('usuarioController', function ($scope, $routeParams, usuario) {
    $scope.usuario = []

    const pegaUsuario = function (id) {
        
        usuario.pegaUsuario(id).then(function (usuario) {
            $scope.usuario = usuario.data[0]
            console.log($scope.usuario)
        })
    }
    pegaUsuario($routeParams.id)
   
    const getPost = function () {
        usuario.getPost().then(function(posts) {
            $scope.postUser = posts.data
            console.log($scope.postUser)
        })
    }
    getPost($routeParams.id)


    const getComent = function () {
        usuario.getComent().then(function(comentarios) {
            $scope.comentsUser = comentarios
            console.log($scope.comentsUser)
        })
    }
    getComent($routeParams.id)
});

/*
    $scope.atualizaUsuario = function () {
        usuario.atualizaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    atualizaUsuario()

    $scope.deletaUsuario = function () {
        usuario.deletaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    deletaUsuario()
*/
