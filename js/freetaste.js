require(['vue', 'Zepto', 'Loading', 'Req'], function (Vue, $, Loading, Req) {
    var farmVue = new Vue({
        el: '#j_main',
        data: function(){
            return {
                list: []
            }
        },
        created: function(){
            Loading.showLoading();
            Req.execute('freeShareList', '', function(data){
                Loading.hideLoading();
                this.list = data.plist;
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
            },
            jumptodetail: function(e){
                var aid = $(e.currentTarget).data('aid'),
                    type = $(e.currentTarget).data('type');

                location.href = 'freetastedetail.html?aid=' + aid + '&type=' + type;

            }
        }
    });

});