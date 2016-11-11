namespace App {
    export class PostController {
        static $inject = ['$http'] ;
        private httpService;
        public postList;

        constructor ($http: angular.IHttpService) {
            this.httpService = $http;
            this.postList=[];
        }
            public getPostList () {
                console.log ('here')
                this.httpService ({
                url:'/posts',
                method: 'GET',
                // params: {
                    // id: id
                // }
            })
            .success ((response) => {
                console.log ('Test data ', response);
            //this.postList = response;
            this.postList = response;
            })
            .error ((response) => {
            });

        }

    }

}
