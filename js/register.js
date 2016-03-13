require(['vue', 'Zepto', 'Loading', 'Util'], function (Vue, $, Loading, Util) {
    var farmVue = new Vue({
        el: '#j_main',
        data: {
            username: '',
            email: '',
            pwd: '',
            confirmpwd: '',
            name: '',
            tel: '',
            bmonth: '',
            bday: '',
            icode: '',
            isCheck: false,
            pwlv: 0,
            lv1: '',
            lv2: '',
            lv3: ''
        },
        created: function () {
            //todo请求验证码图片服务
            var isCheck = Util.getQueryParam('isCheck');
            if(isCheck == 1){
                $('#j_checkbox').attr('checked', 'checked');
            }

        },
        methods: {
            jump: function(e){
                var $target = $(e.currentTarget),
                    href = $target.data('href');

                location.href = href;
            },
            getpwdLv: function () {
                var lengthScore = 0;
                if(this.pwd.length == 0){
                    lengthScore = 0;
                }else if(this.pwd.length < 5){
                    lengthScore = 1;
                }else if(this.pwd.length < 8){
                    lengthScore = 2;
                }else{
                    lengthScore = 3;
                }
                var otherScore = 0;
                if(this.pwd.match(/[a-z]/i)){
                    otherScore++;
                }
                if(this.pwd.match(/[0-9]/)){
                    otherScore++;
                }
                if(this.pwd.match(/\W/)){
                    otherScore++;
                }
                return lengthScore + otherScore;
            },
            //更新密码强度
            onInputPwd: function () {
                this.pwlv = this.getpwdLv();
                this.lv1 = this.pwlv > 0 ? 'current' : '';
                this.lv2 = this.pwlv > 2 ? 'current' : '';
                this.lv3 = this.pwlv > 4 ? 'current' : '';
            },
            onSubmit: function () {
                if(!this.username){
                    return alert('请输入用户名');
                }
                if(!this.email || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.mail)){
                    return alert('请输入正确的邮箱');
                }
                if(!this.pwd){
                    return alert('请输入密码');
                }
                if(this.pwd != this.confirmpwd){
                    return alert('请确保两次输入的密码一致')
                }
                if(!this.name){
                    return alert('请输入姓名');
                }
                if(!this.tel || !/^1[345678][\d]{9}$/g.test(this.tel)){
                    return alert('请输入手机号');
                }
                if(!this.bmonth){
                    return alert('请输入生日');
                }
                if(!this.bday){
                    return alert('请输入生日');
                }
                if(!this.icode){
                    return alert('请输入验证码');
                }
                this.isCheck = $('#j_checkbox').attr('checked');
                if(!this.isCheck){
                    return alert('请先看过并接受用户协议');
                }
                //todo注册服务
            }
        }
    });
});