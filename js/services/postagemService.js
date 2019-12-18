angular.module('ikbaseApp').factory('postagemService', function($http){

    return({
        inserirPostagem: inserirPostagem,
        pegarTodosPosts: pegarTodosPosts,
        atualizarPost: atualizarPost,
        deletaPost: deletaPost,
        pegarPost: pegarPost
    });

    function inserirPostagem(postagem){
        return $http.post('localhost:8080/create/post', postagem);
    }

    function pegarTodosPosts(){
        return $http.get('localhost:8080/getAll/post');
    }

    function atualizarPost(id){
        return $http.update('localhost:8080/update/post',id);
    }

    function deletaPost(id){
        return $http.delete('localhost:8080/delete/post/:id',id);
    }

    function pegarPost(id){
        return $http.get('localhost:8080/get/post/:id',id);
    }

});