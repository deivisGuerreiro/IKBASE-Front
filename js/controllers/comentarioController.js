  
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