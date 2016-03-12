require(['vue', 'Zepto', 'Loading'], function (Vue, $, Loading) {
    var farmVue = new Vue({
        el: '#j_main',
        methods: {
            jump: function(e){
                var $target = $(e.currentTarget),
                    href = $target.data('href');

                location.href = href;
            }
        }
    });
});