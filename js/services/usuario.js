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
    function _logout(){
        return $http.get('http://localhost:8080/logout');
    } 
    function _getID(){
        return $http.get('http://localhost:8080/getId');
    } 
    function _getPost(id_user){
        return $http.get('http://localhost:8080/getPost/'+id_user);
    }
    function _getComent(id_user){
        return $http.get('http://localhost:8080/getComent/'+id_user);
    }
    return ({
        cadastrarUsuario: _cadastrarUsuario,
        pegaTodosUsuarios:_pegaTodosUsuarios,
        atualizaUsuario:_atualizaUsuario,
        deletaUsuario:_deletaUsuario,
        pegaUsuario: _pegaUsuario,
        verifica:_verifica,
        logar:_logar,
        logout:_logout,
        getID:_getID,
        getPost:_getPost,
        getComent: _getComent
    });
});