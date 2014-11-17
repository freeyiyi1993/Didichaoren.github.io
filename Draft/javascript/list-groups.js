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
                direction: 'left'
            };
            var settings = $.extend(defaults,options);
            var touchEvents = {
                touchstart: 'touchstart',
                touchmove: 'touchmove',
                touchend: 'touchend'
            };
            return this.each(function () {
                var startX;
                if(!navigator.userAgent.match(/mobile/i)){
                    touchEvents.touchstart = 'mousedown';
                    touchEvents.touchmove = 'mousemove';
                    touchEvents.touchend = 'mouseup';
                }
                $(this).children().bind(touchEvents.touchstart, function (event) {
                    event.preventDefault();
                    startX = event.pageX;

                }).bind(touchEvents.touchmove, function (event) {
                    event.preventDefault();

                }).bind(touchEvents.touchend, function (event) {
                    event.preventDefault();
                    if((startX-event.pageX)>20) {
                        $(this).siblings().children().removeClass('list-touchmoved');
                        $(this).children().addClass('list-touchmoved');
                    }
                    else if ((startX-event.pageX)<-10) {
                        $(this).children().removeClass('list-touchmoved');
                    }
                });
                $('.list-touchmoved').on('click', function (event) {
                    event.preventDefault();
                   $(this).hide();
                    console.log('12ss3');
                });
            });
        },
        destroy: function () {

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

