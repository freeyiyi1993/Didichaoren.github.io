/**
 * Created by DAC-Chen on 2014/11/24.
 */
//(function ($) {
//    var settings;
//    var scrollImg = function(element,options) {
//        this.element = $(element);
//        var defaults = {
//            page: '.pgn-circle',
//            pageChoosed:1,
//            auto: 'false',
//            timeCircle:10000
//        };
//        settings = $.extend(defaults,options);
//    };
//
//    scrollImg.prototype = {
//        scroll: function() {
//            var $this = this.element;
//            $(settings.page).children().eq(settings.pageChoosed).addClass('pgn-choosed');
//        }
//    };
//
//    myPlugin = function(options) {
//        var scrollimg = new scrollImg(this, options);
//        return scrollimg.scroll();
//    };
//
//    $.fn.imgScroll = myPlugin;
//})(jQuery);

(function ($) {
    var methods = {
        init: function (options) {
            var defaults = {
                pgn: '.pgn-circle', //pager的容器
                pgnEle: '',   //如果不是默认，页码的特征
                pgnChoosed: 1,  //默认选中的页码
                leftButton: '.pgn-pre', //向左的按钮
                rightButton: '.pgn-next', //向右的按钮
                autoPlay: 'false', //自动播放
                timeCircle: 10000 //自动播放的时间
            };
            var settings = $.extend(defaults, options);
            var imgs = [];
            var i = 0;
            $(this).find('img[src]').each(function () {
                imgs[i] = $(this).offset().left;
                i++;
            });
            return this.each(function () {
                var $this = $(this);
                var curPage = settings.pgnChoosed;
                $(settings.page).children().eq(settings.pgnChoosed).addClass('pgn-choosed');
                $(settings.leftButton).bind('click', function () {
                    $this.animate({scrollLeft:imgs[curPage-2]},500);
                    curPage--;
                });
                $(settings.rightButton).bind('click', function () {
                    //$this.scrollLeft($this.find('img[src]').width());
                    //console.log($this.find('img[src]').offset.left);
                    $this.animate({scrollLeft:imgs[curPage]},500);
                    curPage++;
                });
                if(settings.pgnEle !== '') {

                }
                else {
                    $(settings.pgn).children().bind('click', function () {
                        console.log($(this).closest('a'));
                    });
                }
            });
        },
        stop: function (options) {

        }
    };
    $.fn.imgScroll = function (options) {
        var method = arguments[0];
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist' );
        }
    };
})(jQuery);
