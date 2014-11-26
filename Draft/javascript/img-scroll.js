/**
 * Created by DAC-Chen on 2014/11/24.
 */
(function ($) {
    var methods = {
        cycle: function (options) {
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
            var touchEvents = {
                touchstart: 'touchstart',
                touchmove: 'touchmove',
                touchend: 'touchend'
            };

            var $this = $(this);
            var imgs = [];
            var i = 0, flag = 0, imgChoosed;
            $(this).find('img[src]').each(function () {
                imgs[i] = $(this);
                i++;
            });

            function rightToLeft(){
                imgChoosed = $this.find('.img-choosed');
                flag = imgChoosed.closest('img[src]').index();
                if(flag+1 === imgs.length) flag = -1;
                imgChoosed.addClass('c-slider');
                $(imgs[flag+1]).show().addClass('u-slider');
                setTimeout(function () {
                    imgChoosed.removeClass('c-slider img-choosed');
                    $(imgs[flag+1]).removeClass('u-slider').addClass('img-choosed');
                },500);
            }
            function leftToRight(){
                imgChoosed = $this.find('.img-choosed');
                flag = imgChoosed.closest('img[src]').index();
                if(flag+1 === imgs.length) flag = -1;
                imgChoosed.addClass('c-l-slider');
                $(imgs[flag+1]).show().addClass('u-l-slider');
                setTimeout(function () {
                    imgChoosed.removeClass('c-l-slider img-choosed');
                    $(imgs[flag+1]).removeClass('u-l-slider').addClass('img-choosed');
                },500);
            }

            return this.each(function () {
                var startX,endX;
                var type = 'mobile';
                if(!navigator.userAgent.match(/mobile/i)){
                    touchEvents.touchstart = 'mousedown';
                    touchEvents.touchmove = 'mousemove';
                    touchEvents.touchend = 'mouseup';
                    type = 'pc';
                }
                $(this).children().bind(touchEvents.touchstart, function (event) {
                    event.preventDefault();
                    startX = (type==='mobile')?event.originalEvent.touches[0].pageX:event.pageX;

                }).bind(touchEvents.touchmove, function (event) {
                    event.preventDefault();

                }).bind(touchEvents.touchend, function (event) {
                    event.preventDefault();
                    endX = (type==='mobile')?event.originalEvent.changedTouches[0].pageX:event.pageX;
                    if((startX-endX)>40) {
                        rightToLeft();
                    }
                    else if((startX-endX)<-40) {
                        leftToRight();
                    }
                });
            });
        },
        scroll: function (options) {
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
            return methods.cycle.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist' );
        }
    };
})(jQuery);
