angular.module('ikbaseApp').controller('feedController', function($scope, $routeParams,postagemService) {
  $scope.posts = []
  
  
  var carregaPosts = function () {
    postagemService.pegarTodosPosts().then(function (data) {
      $scope.posts = data.data;
    });
  }
  carregaPosts()
});