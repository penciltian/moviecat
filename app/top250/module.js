
(function (angular) {
    angular.module('moviecat.top250',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/top250',{
                templateUrl:'./top250/view.html',
                controller:'Top250Controller'
            });
        }])
        .controller('Top250Controller',['$scope',function ($scope) {
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