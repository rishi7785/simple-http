var App;
(function (App) {
    var HttpController = (function () {
        function HttpController($http) {
            this.httpService = $http;
            this.display = '';
        }
        HttpController.prototype.getRequest = function () {
            var _this = this;
            this.httpService({
                method: 'GET',
                url: '/test'
            })
                .success(function (response) {
                console.log('this call was successful');
                console.log('This is the response', response);
                console.log('This is the response', response.message);
                _this.display = response.message;
            })
                .error(function () {
                console.error('The Call failed.');
            });
        };
        HttpController.prototype.getSomeRoute = function () {
            this.httpService({
                method: 'GET',
                url: '/someroute'
            })
                .success(function (response) {
                console.log('Successful call');
                console.log('This is the response: ', response.message);
            })
                .error(function () {
                console.log('Call failed');
            });
        };
        return HttpController;
    }());
    HttpController.$inject = ['http'];
    App.HttpController = HttpController;
})(App || (App = {}));
