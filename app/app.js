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
                //$location.url()�����������ʾ��ȡurl����,�����ʾ����url
                $location.url('/search?q='+$scope.query);
            }
        }])
        //�Զ���ָ��:��һ������:ָ�������,������ʱ����Ҫʹ���շ�������. ����ͼ��ʹ�õ�ʱ��Ҫͨ��:<div my-btn></div>
        //�ڶ�������:��ʾҪ��һЩ����,�����Ҫע�����,����Ļص�����,�ø���д ָ��Ĵ���
})(angular);