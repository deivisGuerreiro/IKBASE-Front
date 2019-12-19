angular.module('ikbaseApp').controller('loginController', function ($scope, $routeParams, usuario) {

  $scope.logado = false
  
  $scope.login = function (user) {

    usuario.logar(user).then(function (result) {

      console.log(result.data);
      $scope.user = ""
      $scope.logado = true
    })

  };

  $scope.deslogar = function (user) {
    
    $scope.logado = false
  };

  $scope.registrar = function (user) {
    if (user.senha == user.resenha) {
      
      usuario.verifica(user).then(function (result) {

        console.log(result.data);
      }) 
    }

  };
});