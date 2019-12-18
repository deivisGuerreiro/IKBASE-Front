angular.module('ikbaseApp').controller('loginController', function ($scope, $routeParams, usuario) {
  var carregaContatos = function () {
  var person = {
    nome :"deivis",
    email:"teste@teste",
    senha:"teste"
  }
    usuario.cadastrarUsuario(person).then(function (result) {
      
      console.log(result.data);
    })
  }
  carregaContatos()

  $scope.login = function (usuario) {


  };
});