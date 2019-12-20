angular.module('ikbaseApp').controller('feedController', function($scope, $routeParams,postagemService) {
  $scope.posts = []
  
  
  var carregaPosts = function () {
    postagemService.pegarTodosPosts().then(function (data) {
      $scope.posts = data.data;
    });
  }
  carregaPosts()
  $scope.savePergunta  = function (pergunta) {
  
    let duvida = {
      duvida:pergunta,
      id_user:localStorage.getItem("id"),
      tecnologias:[]
    }
    postagemService.inserirPostagem(duvida).then(function (result) {
      carregaPosts()
    })
  }
  

});