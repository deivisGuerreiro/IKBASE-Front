angular.module('ikbaseApp').controller('comentarioController', function($scope, $routeParams,comentarioService,postagemService) {
   
    
    var pegaPergunta = function (id) {
      postagemService.pegarPost(id).then(function (data) {
        
        $scope.pergunta = data.data[0]
      });
    }
    pegaPergunta($routeParams.id);

    $scope.saveResposta  = function (resposta) {
  
      let comentario = {
        id_postagem:$routeParams.id,
        id_user:localStorage.getItem("id"),
        resposta:resposta
      }
      $scope.resposta =""
      comentarioService.criaComentario(comentario).then(function (result) {
        pegaPergunta($routeParams.id);
      })
    }
  });