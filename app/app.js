(function (angular) {
    // "use strict";

    // start your ride
    angular.module('moviecat',[
        'moviecat.home',
        'moviecat.details',
        'moviecat.movieList',
        'moviecat.autoActive'
    ])
        .controller('MainController',['$scope','$location',function ($scope,$location) {
            $scope.query='';
            $scope.search=function () {
                //$location.url()不传入参数表示获取url参数,传入表示设置url
                $location.url('/search?q='+$scope.query);
            }
        }])
        //自定义指令:第一个参数:指令的名称,创建的时候需要使用驼峰命名法. 在视图中使用的时候要通过:<div my-btn></div>
        //第二个参数:表示要的一些服务,如果需要注入进来,里面的回调函数,用个来写 指令的代码
})(angular);