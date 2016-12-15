
(function (angular) {
    angular.module('moviecat.details',['ngRoute'])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider.when('/details/:id',{
                templateUrl:'./movie_detail/view.html', /*注意路径是相对于Index.html来(推荐使用绝对路径)*/
                controller:'DetailController'
            })
        }])
        .controller('DetailController',['$scope','$routeParams','rubyJSONP',function ($scope,$routeParams,rubyJSONP) {
            var id=$routeParams.id;
            rubyJSONP.jsonp('http://api.douban.com/v2/movie/subject/'+id,{},function (data) {
                $scope.movieDetail=data;
                $scope.$apply();
                console.log(data);
            })
        }]);
})(angular);