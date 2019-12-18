angular.module('ikbaseApp').factory('usuario', function($http){
    

    function _cadastrarUsuario(usuario){
        return $http.post('http://localhost:8080/create/user/', usuario);
    }

    function _pegaTodosUsuarios(){
        return $http.get('http://localhost:8080/getAll/users');
    }

    function _atualizaUsuario(usuario){
        return $http.put('http://localhost:8080/update/user/'+usuario);
    }

    function _deletaUsuario(id){
        return $http.delete('http://localhost:8080/delete/user/'+id);
    }

    function _pegaUsuario(id){
        return $http.get('http://localhost:8080/get/user/'+id);
    }
    function _verifica(usuario){
        return $http.post('http://localhost:8080/verifica/user/',usuario);
    }  
    function _logar(usuario){
        return $http.post('http://localhost:8080/login/user/',usuario);
    } 
    return ({
        cadastrarUsuario: _cadastrarUsuario,
        pegaTodosUsuarios:_pegaTodosUsuarios,
        atualizaUsuario:_atualizaUsuario,
        deletaUsuario:_deletaUsuario,
        pegaUsuario: _pegaUsuario,
        verifica:_verifica,
        logar:_logar
    });
});