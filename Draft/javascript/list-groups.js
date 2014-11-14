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
            return this.each(function () {
                $(this).bind('click', function () {
                    
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

