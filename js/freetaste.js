require(['vue', 'Zepto', 'Loading', 'Req'], function (Vue, $, Loading, Req) {
    var farmVue = new Vue({
        el: '#j_main',
        data: {
            list: []
        },
        created: function(){
            Loading.showLoading();
            Req.execute('freeShareList', '', function(data){
                Loading.hideLoading();

            }, function(data){
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
            }
        }
    });

});