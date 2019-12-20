<<<<<<< HEAD
  
angular.module('ikbaseApp').controller('comentarioController', function($scope, $routeParams,comentarioService) {
  $scope.respostas = []
  
  
  var carregaComentario = function () {
    comentarioService.pegaTodosComentarios().then(function (data) {
      $scope.respostas = data.data;
    });
  }
  carregaComentario();

  var criaComentario = function () {
    comentarioService.criaComentario().then(function (data) {
      $scope.respostas = data.data;
    });
  }
  criaComentario();

  var atualizaComentario = function () {
    comentarioService.atualizaComentario().then(function (data) {
      $scope.respostas = data.data;
    });
  }
  atualizaComentario();

  var deleteComentario = function () {
    comentarioService.deleteComentario().then(function (data) {
      $scope.respostas = data.data;
    });
  }
  deleteComentario();

});
=======
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
>>>>>>> 1319b7ec7e6572a6c5d3016aeaa3fd18d2b206b9
