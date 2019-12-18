angular.module('ikbaseApp').controller('loginController', function ($scope, $routeParams, usuario) {


  $scope.login = function (user) {

    usuario.logar(user).then(function (result) {

      console.log(result.data);
    })

  };

  $scope.registrar = function (user) {
    if (user.senha == user.resenha) {
      
      usuario.verifica(user).then(function (result) {

        console.log(result.data);
      }) 
    }

  };
});