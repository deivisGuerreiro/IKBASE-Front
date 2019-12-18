angular.module('ikbaseApp').factory('cadastroUsuario', function($http){
    return ({
        cadastrarUsuario: cadastrarUsuario,
        pegaTodosUsuarios:pegaTodosUsuarios,
        atualizaUsuario:atualizaUsuario,
        deletaUsuario:deletaUsuario,
        pegaUsuario: pegaUsuario
    });

    function cadastrarUsuario(usuario){
        return $http.post('localhost:8080/create/user/', usuario);
    }

    function pegaTodosUsuarios(){
        return $http.get('localhost:8080/getAll/users');
    }

    function atualizaUsuario(id){
        return $http.put('/update/user/'+id);
    }

    function deletaUsuario(id){
        return $http.delete('/delete/user/:id',id);
    }

    function pegaUsuario(id){
        return $http.get('/get/user/:id',id);
    }

});