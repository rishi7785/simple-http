    namespace App {
    export class HttpController {
        static $inject = ['http'];
        private httpService;
        public display;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.display = '';
        }



        public getRequest () {
        //use the angular http service object to make a call to server
            this.httpService ({
                //provide the HTTP method to use
                method: 'GET',
                //provide the url to hit
                url: '/test'
           })
           .success ((response) => {
                console.log ('this call was successful');
                console.log ('This is the response', response);
                console.log ('This is the response', response.message);
                this.display = response.message;
//I dont understand the above 5 lines whatsoever
            })
            //check for failure
            .error (function () {
                console.error ('The Call failed.');
            });
        }
        public getSomeRoute () {
                   this.httpService({
                       method:'GET',
                       url:'/someroute'
                   })
                   .success((response) => {
                       console.log ('Successful call');
                       console.log ('This is the response: ', response.message);
                   })
                   .error(function() {
                       console.log('Call failed');
                   });
               }
    }     }
