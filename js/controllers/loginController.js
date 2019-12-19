angular.module('ikbaseApp').controller('loginController', function ($scope, $routeParams, usuario) {

  $scope.logado = false

  $scope.login = function (user) {
    usuario.logar(user).then(function (result) {
      
      
      $scope.userLogado = result.data.id
      console.log($scope.logado)
    })

  };

  $scope.deslogar = function (user) {

    $scope.logado = false
  };

  $scope.registrar = function (user) {
    console.log($scope.logado)
    if (user.senha == user.resenha) {

      usuario.verifica(user).then(function (result) {

        if (!result.data) {
          usuario.cadastrarUsuario(user).then(function (result) {
           
            $scope.login(user)
            
          })
        }
      })

    };
    $scope.logado = true
    console.log($scope.logado)
    
  }
});