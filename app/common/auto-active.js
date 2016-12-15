

(function (angular) {
    angular.module('moviecat.autoActive',[])
        .directive('autoActive',['$location',function ($location) {
            return{
                //用来指定自定义的模板
                //template:'<div></div>',
                //restrict:'A', //E:element,可以作为自定义标签使用  C:class  M:注释,配合 replace:true(替换模板内容);使用  A:属性
                link:function (scope,element) {
                    scope.location=$location;
                    scope.$watch('location.url()',function (newValue) {
                        var aLink=element.children().attr('href');
                        if(aLink.indexOf(newValue)>-1){
                            element.parent().children().removeClass("active");
                            element.addClass('active');
                        }
                    });
                    //scope 与控制器中$scope的作用相同
                    //element 表示当前元素,是jqLite对象
                    //attributes 表示当前元素的所有属性
                   //element.on('click',function () {
                   //    element.parent().children().removeClass("active");
                   //    element.addClass("active");
                   //})
                }
            }
        }])
})(angular);