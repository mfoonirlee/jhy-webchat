require(['vue', 'Zepto', 'Loading', 'Req', 'Util'], function (Vue, $, Loading, Req, Util) {
    var farmVue = new Vue({
        el: '#j_main',
        data: function(){
            return {
                id: '',
                num: '380',
                numdesc: '380元',
                tel: '',
                code: ''
            }
        },
        created: function () {
            // var paramStr = 'tid=' + Util.getQueryParam('tid');
            // Loading.showLoading();
            // Req.execute('activityList', paramStr, function(data) {
            //     Loading.hideLoading();
            //     this.list = data.list.map(function(n){n.name = Util.getNameByActType(n.type);return n;});
            //     this.url = data.url;
            // }, function (data) {
            //     Loading.hideLoading();
            //     alert('请求失败');
            //     setTimeout(function () {
            //         history.back(-1);
            //     }, 2000);
            // }, this);
        },
        methods: {
            submit: function () {
                //todo
            },
            choose: function (e) {
                this.numdesc = $(e.currentTarget).html();
                this.num = $(e.currentTarget).html().slice(0, -1);
            },
            inputNum: function(e){
                this.num = $(e.currentTarget).val();
                this.numdesc = $(e.currentTarget).val() + '元';
            }
        }
    });
});