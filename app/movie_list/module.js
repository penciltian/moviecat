(function (angular) {
    angular.module('moviecat.movieList', ['ngRoute','moviecat.jsonp'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/:pageType/:page?', {
                    //:page表示当前处于多少页,参数可以省略
                    templateUrl: './movie_list/view.html',
                    controller: 'MovieListController'
                })
                .otherwise({
                    redirectTo: '/home_page'
                })
        }])
        .controller('MovieListController', ['$scope', '$routeParams', "$route", 'rubyJSONP', function ($scope, $routeParams, $route, rubyJSONP) {
            //加载动画
            $scope.isLoaded = true;
            //获取路由参数,给元素添加active参数
            $scope.active = $routeParams.movieType;
            //实现分页
            $scope.pageSise = 5;
            $scope.curPage = $routeParams.page || 1;

            var movieStart = ($scope.curPage - 1) * $scope.pageSise;


            //自己创建的jsonp
            rubyJSONP.jsonp('http://api.douban.com/v2/movie/' + $routeParams.pageType,
                {start: movieStart, count: $scope.pageSise, q: $routeParams.q || ''},
                function (data) {
                    $scope.movie = data;
                    $scope.totalPage = Math.ceil(data.total / $scope.pageSise);
                    $scope.isLoaded = false;
                    $scope.$apply();
                }
            );

            //实现上一页,下一页,翻页的功能
            $scope.goPages = function (current) {
                //限制当前页的范围
                if (current <= 0 || current > $scope.totalPage) {
                    return;
                }
                //$scope.curPage=current;/*路由发生改变会自动修改curPage,可以不写*/
                //通过调用这个方法更新路由
                $route.updateParams({page: current});
            }

        }]);
})(angular);