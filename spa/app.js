// Criação do módulo App (Angular)
// ngRoute é uma dependência que permite a implementação da funcionalidade roteamento
// Também facilita a configuração e o gerenciamento das rotas do aplicativo
let app = angular.module("App", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "paginas/home.html"
        })
        .when("/pagina1", {
            templateUrl: "paginas/p1.html"
        })
        .when("/pagina2", {
            templateUrl: "paginas/p2.html"
        })
        .when("/pagina3", {
            templateUrl: "paginas/p3.html"
        })

        .otherwise({redirectTo: "/"})
})
