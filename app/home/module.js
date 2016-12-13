
(function (angular) {
    angular.module('moviecat.home',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/home_page',{
                templateUrl:'./home/view.html', /*注意路径是相对于Index.html来(推荐使用绝对路径)*/
                controller:'HomePageController'
            })
        }])
        .controller('HomePageController',['$scope','$http',function ($scope,$http) {

        }]);
})(angular);