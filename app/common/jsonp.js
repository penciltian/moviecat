

//����jsonp
//����1:�����ַ
//����2:�������
//����3:�ص�����,������ȡ����
(function (angular) {
    angular.module('moviecat.jsonp',[])
        .service('rubyJSONP',['$window',function ($window) {
            var doc=$window.document;
            this.jsonp=function (url,params,callback) {
                //url:http://api.douban.com/v2/movie/in_theaters
                //params:?count=10&start=0&
                //callback : callback=myCallback

                url+='?';
                for(var k in params){
                    url+=k+'='+params[k]+'&';
                }
                //��Ϊcallbackû������,����Ҫ�ֶ�����һ������
                var cbName='ruby_jsonp_'+(new Date()-0);
                url+='callback='+cbName;
                window[cbName]=function (data) {
                    callback(data);
                    document.body.removeChild(script);
                    delete  window[cbName];
                };
                var script=document.createElement('script');
                script.src=url;
                document.body.appendChild(script);
            }
        }])
})(angular);