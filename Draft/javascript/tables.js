$(document).ready(function(){
    var thclone = $('.table-headfixed table').clone();
    var obj = $('<div class="thclone table-responsive"></div>');
    obj.insertBefore('.table-headfixed');
    thclone.prependTo(obj);
    $('.thclone tbody').hide();
    $('.table-headfixed thead').hide();
});