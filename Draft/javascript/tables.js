$(document).ready(function(){
    var thclone = $('.table-headfixed table').clone();
    var obj = $('<div class="thclone table-responsive"></div>');
    obj.insertBefore('.table-headfixed');
    thclone.prependTo(obj);
    var td_num = 0;
    $('.thclone').find('thead').find('th').each(function () {
        var td_width = $('.table-headfixed').find('tbody').find('td:nth-child('+(td_num+1)+')').width();
        console.log(td_width);
        $(this).width(td_width);
        $('.table-headfixed').find('tbody').find('td:nth-child('+(td_num+1)+')').width(td_width)
        td_num++;
    });
    $('.thclone tbody').hide();
    $('.table-headfixed thead').hide();
    $(window).resize(function () {
        var td_num = 0;
        $('.thclone').find('thead').find('th').each(function () {
            var td_width = $('.table-headfixed').find('tbody').find('td:nth-child('+(td_num+1)+')').width();
            console.log(td_width);
            $(this).width(td_width);
            td_num++;
        });
    });
});