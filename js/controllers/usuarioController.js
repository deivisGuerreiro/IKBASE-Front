angular.module('ikbaseApp').controller('usuarioController', function ($scope, $routeParams, usuario) {
    $scope.usuario = []

    


/*
    $scope.atualizaUsuario = function () {
        usuario.atualizaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    atualizaUsuario()*/

    /*$scope.deletaUsuario = function () {
        usuario.deletaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    deletaUsuario()
*/
    $scope.pegaUsuario = function () {
        usuario.pegaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    pegaUsuario()

    
});


/*
cadastrarUsuario: _cadastrarUsuario,------
        pegaTodosUsuarios:_pegaTodosUsuarios,------
        atualizaUsuario:_atualizaUsuario,----------
        deletaUsuario:_deletaUsuario,-----------
        pegaUsuario: _pegaUsuario,---------
        verifica:_verifica,
        logar:_logar


*/
