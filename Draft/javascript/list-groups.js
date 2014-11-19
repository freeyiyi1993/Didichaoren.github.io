(function ($) {
    var methods = {
        organ: function () {
            var organs,organ;
            return this.each(function () {
                organs = $(this).children('.list-item');
                organs.click(function () {
                    organ = $(this);
                    organ.siblings('.list-content').not($(this).next()).hide();
                    organ.next().toggle();
                });
            });
        },
        swipe: function (options) {
            var defaults = {
                content: '删除'
            };
            var settings = $.extend(defaults,options);
            var touchEvents = {
                touchstart: 'touchstart',
                touchmove: 'touchmove',
                touchend: 'touchend'
            };
            return this.each(function () {
                var startX,endX;
                var type = 'mobile';
                if(!navigator.userAgent.match(/mobile/i)){
                    touchEvents.touchstart = 'mousedown';
                    touchEvents.touchmove = 'mousemove';
                    touchEvents.touchend = 'mouseup';
                    type = 'pc';
                }
                $(this).children().children().append('<span>'+settings.content+'</span>');
                $(this).children().bind(touchEvents.touchstart, function (event) {
                    event.preventDefault();
                    startX = (type==='mobile')?event.originalEvent.touches[0].pageX:event.pageX;

                }).bind(touchEvents.touchmove, function (event) {
                    event.preventDefault();

                }).bind(touchEvents.touchend, function (event) {
                    event.preventDefault();
                    endX = (type==='mobile')?event.originalEvent.changedTouches[0].pageX:event.pageX;
                    if((startX-endX)>20) {
                        $(this).siblings().children().removeClass('list-touchmoved');
                        $(this).children().addClass('list-touchmoved');
                    }
                    else if ((startX-endX)<-10) {
                        $(this).children().removeClass('list-touchmoved');
                    }
                });
                $('.list-touchmovable').on(touchEvents.touchstart,'.list-touchmoved>span', function (event) {
                    event.preventDefault();
                    //$(this).parents('.list-item').hide();
                    methods.destroy($(this).parents('.list-item'));
                });
            });
        },
        destroy: function (options) {
            options.hide();
        }
    };
    $.fn.listGroup = function (options) {
        var method = arguments[0];
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.organ.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist' );
        }
    };
})(jQuery);

