
(function (angular) {
    angular.module('moviecat.home',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/home_page',{
                templateUrl:'./home/view.html', /*注意路径是相对于Index.html来(推荐使用绝对路径)*/
                controller:'HomePageController'
            })
        }])
        .controller('HomePageController',['$scope','$http',function ($scope,$http) {
            $http({
                method: 'GET',
                url: './in_theaters/data.json'
            }).then(function(response) {
                // ajax请求发送成功的回调函数
                // console.log('成功！')
                console.log(response)
                $scope.movie = response.data;
            }, function(response) {
                // 失败的函数
                console.log('失败！')
                console.log(response)
            });
        }]);
})(angular);