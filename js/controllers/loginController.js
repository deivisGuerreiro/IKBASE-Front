angular.module('ikbaseApp').controller('loginController', function ($scope, $routeParams, usuario) {
  var carregaContatos = function () {
    usuario.pegaTodosUsuarios().then(function (data) {
      
      console.log(data);
    })
  }
  carregaContatos()

  $scope.login = function (usuario) {


  };
});