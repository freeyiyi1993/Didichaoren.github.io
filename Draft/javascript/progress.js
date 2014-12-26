/**
 * Created by DAC-Chen on 2014/11/12.
 */

(function ($) {

    var methods = {
        init: function (options) {

            var settings = this.settings;
            return this.each(function () {
                var pro = $(this).children();
                pro.css('width', settings.curValue + '%');
                if (settings.hasText === true)
                    pro.text(settings.curValue + '%');
                if (settings.hasStrip === true)
                    pro.addClass('probar-stripe');
                if (settings.hasAnimatedStrip === true)
                    pro.addClass('animate-stripe');
            });
        },
        //start: function () {
        //
        //},
        //stop: function () {
        //
        //},
        //done: function () {
        //
        //},
        animate: function (options) {
            var settings = this.settings;
            return this.each(function () {
                var pro = $(this).children();
                if(settings.start < settings.end){
                    pro.animate({
                        width:settings.end+'%'},{
                        duration:settings.duration
                    });
                    if(settings.hasText === 'true'){
                        setInterval(function () {
                            pro.text(parseInt((pro.innerWidth()/pro.parent().width())*100) + '%');
                        },settings.duration/(settings.end-settings.start));
                    }
                }
            });
        }
    };
    
    $.fn.progress = function (options) {
        this.defaults = {
            curValue: 0,
            hasText: true,
            hasStrip: false,
            hasAnimatedStrip: false,

            start: 0,
            end: 100,
            duration: 7000
        };
        this.settings = $.extend({}, this.defaults, options);
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