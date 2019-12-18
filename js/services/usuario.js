angular.module('ikbaseApp').factory('usuario', function($http){
    return ({
        cadastrarUsuario: cadastrarUsuario,
        pegaTodosUsuarios:pegaTodosUsuarios,
        atualizaUsuario:atualizaUsuario,
        deletaUsuario:deletaUsuario,
        pegaUsuario: pegaUsuario
    });

    function cadastrarUsuario(usuario){
        return $http.post('http://localhost:8080/create/user/', usuario);
    }

    function pegaTodosUsuarios(){
        return $http.get('http://localhost:8080/getAll/users');
    }

    function atualizaUsuario(id){
        return $http.put('http://localhost:8080/update/user/'+id);
    }

    function deletaUsuario(id){
        return $http.delete('http://localhost:8080/delete/user/'+id);
    }

    function pegaUsuario(id){
        return $http.get('http://localhost:8080/get/user/'+id);
    }

});