require(['vue', 'Zepto', 'Loading'], function (Vue, $, Loading) {
    var farmVue = new Vue({
        el: '#j_main',
        data: {
            isCheck: false,
        },
        created: function () {
            //todo请求验证码图片服务
        },
        methods: {
            goback: function(){
                var isCheck = $('#j_checkbox').attr('checked');
                if(isCheck){
                    location.href = 'register.html?isCheck=1';
                }else{
                    history.back(-1);
                }
            },
            retback: function(){
                history.back(-1);
            }
        }
    });
});