require(['vue', 'Zepto'], function (Vue, $) {
    var CONST_MINISEC_INTERVAL = 6000;

    var IndexVue = new Vue({
        el: '#j_index',
        data: {
            pageIndex: 0
        },
        events: {

        },
        methods: {
            //选择某页
            choosePage: function (e) {
                $target = $(e.currentTarget);
                this.turnPage(parseInt($target.data('index')), true);
            },
            /**
            * @param: 页码
            * @param: 是否触发阻塞动画自动播放
            */
            turnPage: function (index, isTrigger) {
                this.pageIndex = index;
                this.isTrigger = isTrigger;
                var translateXValue = '0';
                switch(index){
                    case 1:
                        translateXValue = '0';
                        break;
                    case 2:
                        translateXValue = '-100%';
                        break;
                    case 3:
                        translateXValue = '-200%';
                        break;
                    default:
                        translateXValue = '0';
                        break;
                }
                $(this.$el).find('#j_slider').css('transform', 'translateX(' + translateXValue + ')');
            },
            //运行翻页的动画
            runTurnPageAnimation: function () {
                var self = this;
                this.timer = setInterval(function(){
                    if(self.isTrigger){
                        self.isTrigger = false;
                    }else{
                        self.pageIndex = self.pageIndex > 2 ? 1 : ++self.pageIndex;
                        $(self.$el).find('#j_dot').children().eq(self.pageIndex - 1).addClass('current').siblings().removeClass('current');
                        self.turnPage(self.pageIndex);
                    }
                }, CONST_MINISEC_INTERVAL);
            }
        },
        created: function(){
            //开始驱动幻灯片
            this.runTurnPageAnimation();
        }
    });
})