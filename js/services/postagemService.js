angular.module('ikbaseApp').factory('postagemService', function($http){

   

    function inserirPostagem(postagem){
        return $http.post('http://localhost:8080/create/post', postagem);
    }

    function pegarTodosPosts(){
        return $http.get('http://localhost:8080/getAll/post');
    }

    function atualizarPost(id){
        return $http.put('http://localhost:8080/update/post',id);
    }

    function deletaPost(id){
        return $http.delete('http://localhost:8080/delete/post/'+id);
    }

    function pegarPost(id){
        return $http.get('http://localhost:8080/get/post/'+id);
    }

    return({
        inserirPostagem: inserirPostagem,
        pegarTodosPosts: pegarTodosPosts,
        atualizarPost: atualizarPost,
        deletaPost: deletaPost,
        pegarPost: pegarPost
    });

});