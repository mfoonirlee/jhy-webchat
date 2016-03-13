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
                    item = this.list.find(function(n){
                        return n.id == aid;
                    });

                location.href = 'activitydetail.html?aid=' + aid + '&type=' + type + '&stime=' + item.stime + '&etime=' + item.etime + '&atype=' + Util.getQueryParam('atype');
            }
        }
    });
});