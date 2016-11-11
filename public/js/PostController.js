var App;
(function (App) {
    var PostController = (function () {
        function PostController($http) {
            this.httpService = $http;
            this.postList = [];
        }
        PostController.prototype.getPostList = function () {
            var _this = this;
            console.log('here');
            this.httpService({
                url: '/posts',
                method: 'GET',
            })
                .success(function (response) {
                console.log('Test data ', response);
                _this.postList = response;
            })
                .error(function (response) {
            });
        };
        return PostController;
    }());
    PostController.$inject = ['$http'];
    App.PostController = PostController;
})(App || (App = {}));
