
(function (angular) {
    angular.module('moviecat.in_theaters',['ngRoute','moviecat.jsonp'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/in_theaters',{
                templateUrl:'./in_theaters/view.html',
                controller:'InTheaterController'
            });
        }])
        .controller('InTheaterController',['$scope','rubyJSONP',function ($scope,rubyJSONP) {
            //$http({
            //    method:"GET",
            //    url:" ./in_theaters/data.json"
            //}).then(function (response) {
            //    console.log(response);
            //    $scope.movie=response.data;
            //}),function (response) {
            //    console.log('失败!');
            //    console.log(response);
            //};

            //$http.jsonp('http://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK')
            //    .then(function (data) {
            //
            //        console.log(data);
            //        console.log(angular.callbacks);
            //    },function (data) {
            //        console.log(data)
            //    });


            //自己创建的jsonp
            rubyJSONP.jsonp('http://api.douban.com/v2/movie/in_theaters',
                {start:0,count:10},
                function (result) {
                    console.log(result.subjects);
                    $scope.movie=result;
                    $scope.$apply();
                }
            );
        }]);
})(angular);