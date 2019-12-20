angular.module('ikbaseApp').controller('usuarioController', function ($scope, $routeParams, usuario) {
    $scope.usuario = {
        nome: "João Almeida",
        profissao: "arquiteto de software",
        foto: "https://image.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, optio libero, enim sed tempora nulla odio similique facilis, maiores nisi accusantium ratione. Cupiditate beatae a dolor cum totam ex quos!",
        tecnologias: ["html", "css", "javascript"]
    }

    const pegaUsuario = function (id) {
        
        usuario.pegaUsuario(id).then(function (usuario) {
            $scope.usuario = usuario.data[0]
            console.log($scope.usuario)
        })
    }
    pegaUsuario($routeParams.id)
   
    const getPost = function (id) {
        usuario.getPost(id).then(function(posts) {
            $scope.postUser = posts.data
            console.log($scope.postUser)
        })
    }
    getPost($routeParams.id)


    const getComent = function (id) {
        usuario.getComent(id).then(function(comentarios) {
            $scope.comentsUser = comentarios.data
            console.log($scope.comentsUser)
        })
    }
    getComent($routeParams.id)

    $scope.logado = true
});

/*
    $scope.atualizaUsuario = function () {
        usuario.atualizaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    atualizaUsuario()

    $scope.deletaUsuario = function () {
        usuario.deletaUsuario().then(function (usuario) {
            $scope.usuario = usuario.usuario
        })
    }
    deletaUsuario()
*/
