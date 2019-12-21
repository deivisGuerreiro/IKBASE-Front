angular.module('ikbaseApp').controller('feedController', function($scope, $routeParams,postagemService,tecnologiasService) {
  $scope.posts2 = []
  $scope.tecnologias2 = []
  $scope.selection = [];
  var tex = []
  $scope.toggleSelection = function toggleSelection(tecnologia) {
    var idx = $scope.selection.indexOf(tecnologia);

    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }
    else {
      $scope.selection.push(tecnologia);
    }
    tex = $scope.selection
  };
  var carrega = function () {
    tecnologiasService.getAll().then(function (tec) {
      $scope.tecnologias2 = tec.data;
      carregaPosts()
    });
  }
  carrega()
  
  var carregaPosts = function () {
    postagemService.pegarTodosPosts().then(function (data) {
      
      $scope.posts2 = data.data;
    });
  }
  $scope.savePergunta  = function (pergunta) {
    $scope.perguntar =""
    $scope.selection = [];
    let tec = tex
    let duvida = {
      duvida:pergunta,
      id_user:localStorage.getItem("id"),
      tecnologias:tec
    }
    postagemService.inserirPostagem(duvida).then(function (result) {
      carregaPosts()
    })
  }


  

   

  
  

});