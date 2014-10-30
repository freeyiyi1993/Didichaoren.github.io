(function ($) {
    $.fn.scrollMonitor = function (options) {
        var defaults = {
            target: []
        };
        var settings = $.extend(defaults,options);

        return this.each(function () {
            //get the $(this)
            var cur = $(this);
            var tar = settings.target;
            var anchor = $;
            var num=0;
            var offsets = [];
            $(tar).find('[href]').each(function () {
                anchor[num] = $(this);
                num++;
            });

            for(var i = 0; i<num; i++){
                var temp1 = anchor[0].attr('href');
                if(i<num-1) {
                    var temp2 = anchor[i+1].attr('href');
                    offsets[i] = $(temp2).offset().top-$(temp1).offset().top;
                }
                else if(i === (num-1)) offsets[i] = $(this)[0].scrollHeight-$(temp1).offset().top;
            }
            console.log($(this)[0].scrollHeight);
            //?为什么len的长度有问题。
            var len = anchor.length;
            //监听滚动事件

            cur.scroll(function () {
                for(var i = 0; i<num; i++){
                    var tars = anchor[i].attr('href');
                    if($(this).scrollTop() < offsets[i]){
                        //监听中发生样式改变在这里修改。
                        $(tar).find('a').css('color','#efefef');
                        $('[href="'+tars+'"]').css('color','green');
                        break;
                    }
                }
            });
        });
    };
})(jQuery);



