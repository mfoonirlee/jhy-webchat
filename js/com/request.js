define(['Zepto'], function ($) {
    /**
    * @descrption: loading组件
    * @version: 1.0.0
    * @author: mfoonirlee
    */
    var request = {
        reqHost: {
            dev: 'http://112.124.110.58:8085/',
            prd: 'http://112.124.110.58:8085/'
        },
        reqHash: {
            //请求注册验证码
            //注册
            //登录
            //慢生活主类列表
            //慢生活列表
            //慢生活详情
            //慢生活报名
            //主题活动主类列表
            //主题活动列表
            //主题活动详情
            //主题活动报名
            //免费分享主类列表
            //免费分享列表
            freeShareList: 'service/plus/index.php?tid=27',
            //免费分享详情
            freeShareDetail: 'service/plus/view_data.php?aid={aid}'
            //免费分享报名
        },
        execute: function (reqName, params, success, error, scope) {
            var self = this,
                reqUrl = this.getReqURL(reqName);

            $.ajax({
                type: 'GET',
                url: reqUrl,
                contentType: 'application/json;charset=utf-8',
                content: self,
                data: JSON.stringify(params),
                success: function (data) {
                    console.log(reqName + '请求成功');
                    success && typeof success === 'function' && scope && success.call(scope, data);
                },
                error: function (data) {
                    console.log(reqName + '请求失败');
                    error && typeof error === 'function' && scope && error.call(scope, data);
                }
            })
        },
        getReqURL: function (reqName) {
            var url = this.reqHost[this.getEnvironment()] + this.reqHash[reqName];
            return url;
        },
        /*检测网络环境*/
        getEnvironment: function () {
            // return 'prd';
            if(location.host.indexOf('localhost') > -1 || location.host.indexOf('file') > -1){
                return 'dev';
            }else{
                return 'prd';
            }
        },
    };
    return request;
});