
(function (angular) {
    angular.module('moviecat.coming_soon',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/coming_soon',{
                templateUrl:'./coming_soon/view.html',
                controller:'ComingSoonController'
            });
        }])
        .controller('ComingSoonController',['$scope',function ($scope) {
            //自己创建的jsonp
            myJSONP('http://api.douban.com/v2/movie/in_theaters',
                {start:0,count:10},
                function (result) {
                    console.log(result);
                    $scope.movie=result;
                }
            );
        }]);
})(angular);