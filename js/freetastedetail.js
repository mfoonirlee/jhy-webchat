require(['vue', 'Zepto', 'Loading', 'Req', 'Util'], function (Vue, $, Loading, Req, Util) {
    var farmVue = new Vue({
        el: '#j_main',
        data: function(){
            return {
                msg: '我要试吃',
                data: {},
                num: 1,
                name: '',
                tel: '',
                addr: ''
            }
        },
        created: function(){
            this.changeType(Util.getQueryParam('type'));
            Loading.showLoading();
            Req.execute('freeShareDetail', 'aid=' + Util.getQueryParam('aid'), function(data){
                Loading.hideLoading();
                this.data = data;
            }, function(data){
                Loading.hideLoading();
                setTimeout(function () {
                    history.back(-1);
                }, 2000);
            }, this);
        },
        methods: {
            changeType: function (type) {
                this.type = type;
                if(this.type == '1'){
                    $('#j_tab1').show();
                    $('#j_tab2').hide();
                    this.msg = '我要试吃';
                }else{
                    $('#j_tab1').hide();
                    $('#j_tab2').show();
                    this.msg = '确认';
                }
            },
            jump: function(e){
                var $target = $(e.currentTarget),
                    href = $target.data('href');

                location.href = href;
            },
            add: function(){
                this.num++;
            },
            reduce: function () {
                if(this.num > 1){
                    this.num--;
                }
            },
            bookByType: function () {
                if(this.type == '1'){
                    this.changeType(2);
                }else{
                    //todo校验是否填好了，然后发送报名请求
                }
            },
            returnByType: function(){
                if(this.type == '1'){
                    history.back(-1);
                }else{
                    this.changeType(1);
                }
            }
        }
    });

});