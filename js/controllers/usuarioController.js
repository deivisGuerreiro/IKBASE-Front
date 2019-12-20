angular.module('ikbaseApp').controller('usuarioController', function ($scope, $routeParams, usuario) {
    $scope.usuario = []

    $scope.cadastroUsuario = function () {
        usuario.cadastrarUsuario().then(function(usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    cadastroUsuario()

    $scope.pegaTodosUsuarios = function () {
        usuario.pegaTodosUsuarios().then(function(usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    pegaTodosUsuarios()

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

    $scope.pegaUsuario = function () {
        usuario.pegaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    pegaUsuario()

    $scope.verifica = function () {
        usuario.verifica().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    verifica()
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
