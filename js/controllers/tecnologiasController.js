angular.module('ikbaseApp').controller('tecnologiasController', function($scope, $routeParmas, tecnologiaService){
    $scope.tecs = []

    const insertTecnologia = function(nome) {
        tecnologiaService.insertTecnologia(nome).then(function(tecnologiaService) {
            $scope.tecnologiaService = tecnologiaService.data
        })
    }
    insertTecnologia($routeParmas.nome)

    const getTec = function (id) {
        tecnologiaService.getTec(id).then(function (tecs) {
            $scope.tecId = tecs.data
        })
    }
    getTec($routeParmas.id)

    const getByName = function (nome) {
        tecnologiaService.getByName(nome).then(function (tecs) {
            $scope.tecName = tecs.data
        })
    }
    getByName($routeParmas.nome)

    const getAll = function () {
        tecnologiaService.getAll().then(function(tecs){
            $scope.tecAll = tecs.data
        })
    }
    getAll($routeParmas)
})