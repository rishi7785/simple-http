var App;
(function (App) {
    var HttpController = (function () {
        function HttpController($http) {
            this.httpService = $http;
            this.httpService({
                method: 'GET',
                url: '/test'
            })
                .success(function () {
                console.log('this call was successful');
            })
                .error(function () {
                console.error('The Call failed.');
            });
        }
        return HttpController;
    }());
    HttpController.$inject = ['http'];
    App.HttpController = HttpController;
})(App || (App = {}));
