var App;
(function (App) {
    var app = angular.module('App', ['ui.router']);
    app.config([
        'stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: App.HomeController,
                controllerAs: 'homeController',
            })
                .state('http', {
                url: '/http',
                templateUrl: 'templates/http.html',
                controller: App.HttpController,
                controllerAs: 'httpController'
            });
        }
    ]);
})(App || (App = {}));