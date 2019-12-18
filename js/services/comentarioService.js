angular.module('ikbaseApp').factory('comentarioService', function($http){
    

    function criaComentario(comentario){
        return $http.post('http://localhost:8080/create/comentario', comentario);
    }

    function pegaTodosComentarios(){
        return $http.get('http://localhost:8080/getAll/comentario/'+id);
    }

    function atualizaComentario(id){
        return $http.put('http://localhost:8080/update/comentario',id);
    }

    function deleteComentario(id){
        return $http.delete('http://localhost:8080/delete/comentario/',+id);
    }

    return ({
        criaComentario: criaComentario,
        pegaTodosComentarios: pegaTodosComentarios,
        atualizaComentario: atualizaComentario,
        deleteComentario: deleteComentario, 

    });


});