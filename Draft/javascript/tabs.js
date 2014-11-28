$(document).ready(function () {

});
(function ($) {
    var methods = {
        init: function (options) {
            //传入参数：默认选中的标签，缓动函数
            var defaults = {
                defaultIndex: 1
                //easing: 'none'
            };
            var settings = $.extend(defaults,options);
            var tab,tabs,tab_item;
            var index,cur,tab_content;
            return this.each(function () {
                tab = $(this);
                tabs = tab.children('.tabs');
                tab_item = tab.find('.tab-item');
                tab_item.hide();
                tab_item.eq(settings.defaultIndex-1).show();
                tabs.children('li').eq(settings.defaultIndex-1).addClass('tab-choosed');

                tabs.on('click', 'li',function () {
                    cur = $(this);
                    cur.siblings().removeClass('tab-choosed');
                    cur.addClass('tab-choosed');
                    index = cur.closest('li').index();
                    tab_content = cur.parent().siblings('.tab-content');

                    tab_content.find('.tab-item').not('.tab-item:eq('+index+')').hide();
                    tab_content.find('.tab-item:eq('+index+')').show();
                });
            });
        }
    };
    $.fn.tabs = function (options) {
        $('.removeTextNodes').contents().filter(function() {
            return this.nodeType === 3;
        }).remove();
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