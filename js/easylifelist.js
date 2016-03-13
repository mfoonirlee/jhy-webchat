require(['vue', 'Zepto', 'Loading', 'Req', 'Util'], function (Vue, $, Loading, Req, Util) {
    var farmVue = new Vue({
        el: '#j_main',
        data: function(){
            return {
                list: [],
                url: ''
            }
        },
        created: function () {
            var paramStr = 'tid=' + Util.getQueryParam('tid');
            Loading.showLoading();
            Req.execute('activityList', paramStr, function(data) {
                Loading.hideLoading();
                this.list = data.list.map(function(n){n.name = Util.getNameByActType(n.type);return n;});
                this.url = data.url;
            }, function () {
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
            jumpByType: function (e){
                var $target = $(e.currentTarget),
                    atype = $target.data('atype');

                location.href = 'activitydetaillist.html?atype=' + atype;
            }
        }
    });
});