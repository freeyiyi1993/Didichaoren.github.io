$(document).ready(function () {
    var tab_item = $('.tab-item');
    var tabs = $('.tabs');
    var tab = $('.tab');
    tab_item.hide();
    tab.find('.tab-item:eq(0)').show();
    tab.children(tabs).find('li:eq(0)').addClass('tab-choosed');

    var index,cur;
    tabs.children('li').on('click', function () {
        cur = $(this);
        cur.parents('.tab').find('li').removeClass('tab-choosed');
        cur.addClass('tab-choosed');
        index = cur.closest('li').index();
        cur.parents('.tab').find('.tab-item').not('.tab-item:eq('+index+')').hide();
        cur.parents('.tab').find('.tab-item:eq('+index+')').show();
    });
});