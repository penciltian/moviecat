

(function (angular) {
    angular.module('moviecat.autoActive',[])
        .directive('autoActive',['$location',function ($location) {
            return{
                //����ָ���Զ����ģ��
                //template:'<div></div>',
                //restrict:'A', //E:element,������Ϊ�Զ����ǩʹ��  C:class  M:ע��,��� replace:true(�滻ģ������);ʹ��  A:����
                link:function (scope,element) {
                    scope.location=$location;
                    scope.$watch('location.url()',function (newValue) {
                        var aLink=element.children().attr('href');
                        if(aLink.indexOf(newValue)>-1){
                            element.parent().children().removeClass("active");
                            element.addClass('active');
                        }
                    });
                    //scope ���������$scope��������ͬ
                    //element ��ʾ��ǰԪ��,��jqLite����
                    //attributes ��ʾ��ǰԪ�ص���������
                   //element.on('click',function () {
                   //    element.parent().children().removeClass("active");
                   //    element.addClass("active");
                   //})
                }
            }
        }])
})(angular);