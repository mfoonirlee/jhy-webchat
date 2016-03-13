require(['vue', 'Zepto', 'Loading', 'Req', 'Util'], function (Vue, $, Loading, Req, Util) {
    var farmVue = new Vue({
        el: '#j_main',
        data: function(){
            return {
                title: '',
                list: []
            }
        },
        created: function () {
            this.title = Util.getNameByActType(Util.getQueryParam('atype'));
            Loading.showLoading();
            Req.execute('activityListSec', 'atype=' + Util.getQueryParam('atype'), function(data){
                Loading.hideLoading();
                this.list = data;
            },function () {
                Loading.hideLoading();
                alert('请求失败');
                setTimeout(function () {
                    history.back(-1);
                }, 2000);
            }, this);
        },
        methods: {
            jump: function(e){
                var $target = $(e.currentTarget),
                    href = $target.data('href');

                location.href = href;
            },
            jumptodetail: function (e) {
                var $target = $(e.currentTarget),
                    type = $target.data('type'),
                    aid = $target.data('id'),
                    item;

                for(var i = 0, len = this.list.length; i < len; i++){
                    if(this.list[i].id == aid){
                        item = this.list[i];
                        break;
                    }
                }

                location.href = 'activitydetail.html?aid=' + aid + '&type=' + type + '&stime=' + item.stime + '&etime=' + item.etime + '&atype=' + Util.getQueryParam('atype');
            }
        }
    });
});