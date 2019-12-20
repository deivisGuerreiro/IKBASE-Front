angular.module('ikbaseApp').controller('comentarioController', function($scope, $routeParams,comentarioService) {
    $scope.resposta = []
    
    
    var carregaComentario = function () {
      comentarioService.pegaTodosComentarios().then(function (data) {
        $scope.resposta = data.data;
      });
    }
    carregaComentario();
  });