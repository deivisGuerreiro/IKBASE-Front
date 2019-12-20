angular.module('ikbaseApp').controller('loginController', function ($scope, $routeParams, usuario) {

 
  function primeira(){
    if(localStorage.getItem("id")){
      $scope.logado = true
    }else{
      $scope.logado = false
    }
  }
  primeira()
  $scope.login = function (user) {
    
    usuario.logar(user).then(function (result) {
      
      
      localStorage.setItem("id",result.data.id)
      $scope.logado = true
      console.log($scope.logado)
    })

  };

  $scope.deslogar = function (user) {
    localStorage.clear()
    $scope.logado = false
  };

  

  $scope.registrar = function (user) {
    if (user.senha == user.resenha) {

      usuario.verifica(user).then(function (result) {

        if (!result.data) {
          usuario.cadastrarUsuario(user).then(function (result) {
           
            $scope.login(user)
            
          })
        }
      })

    };
    
    
  }
});