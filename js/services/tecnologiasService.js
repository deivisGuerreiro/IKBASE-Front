angular.module('ikbaseApp').factory('tecnologia', function($http){
    
    function _getTecById(id) {
        return $http.post('http://localhost:8080/get/tec/'+id)
    }
    function _getByName(nome) {
        return $http.post('http://localhost:8080/get/tecn/'+nome)
    }
    function _getAll() {
        return $http.post('http://localhost:8080/get/tecs')
    }
    function _insertTec(tecnologia) {
        return $http.post('http://localhost:8080/post/tec', tecnologia)
    }
    return ({
        insertTecnologia:_insertTec,
        getTec:_getTecById,
        getByName:_getByName,
        getAll:_getAll
    })
})
