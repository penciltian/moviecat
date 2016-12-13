
(function (angular) {
    angular.module('moviecat.in_theaters',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/in_theaters',{
                templateUrl:'./in_theaters/view.html',
                controller:'InTheaterController'
            });
        }])
        .controller('InTheaterController',['$scope','$http',function ($scope,$http) {
            $http({
                method:"GET",
                url:" ./in_theaters/data.json"
            }).then(function (response) {
                console.log(response);
                $scope.movie=response.data;
            }),function (response) {
                console.log('失败!');
                console.log(response);
            };
        }]);
})(angular);