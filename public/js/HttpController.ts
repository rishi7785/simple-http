namespace App {
    export class HttpController{
        static $inject = ['http'];
        private httpService;

        constructor ($http: angular.IHttpService) {
                this.httpService = $http;
                this.httpService ({
                    method: 'GET',
                    url: '/test'
                })
                .success (function () {
                    console.log ('this call was successful');
                })
                .error (function () {
                    console.error ('The Call failed.');
                });
            
        }
    }
}
