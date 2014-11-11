

$(document).ready(function() {
    $('.popup-bottom').each(function(){
        var $width1 = $(this).parent('.popup').outerWidth();
        $(this).css({'left':'-'+((240-($width1))/2)+'px'});
        if($(this).find('.popup-header').length===0) {
            $(this).find('.popup-triangle').css({'color': 'white'})
        }
    });
    $('.popup-top').each(function(){
        var $width2 = $(this).parent('.popup').outerWidth();
        $(this).css({'left':'-'+((240-($width2))/2)+'px'});
    });
    $('.popup-left').each(function(){
        var $width3 = $(this).parent('.popup').outerWidth();
        $(this).css({'right':(($width3)+16)+'px'});
        var $height1 = $(this).innerHeight();
        $(this).find('.popup-triangle').css({'top':((($height1)-34)/2)+'px'});
        var $height2 = $(this).parent('.popup').outerHeight();
        $(this).css({'top':'-'+((($height1)-($height2))/2)+'px'});
    });
    $('.popup-right').each(function(){
        var $width3 = $(this).parent('.popup').outerWidth();
        $(this).css({'left':(($width3)+16)+'px'});
        var $height1 = $(this).innerHeight();
        $(this).find('.popup-triangle').css({'top':((($height1)-34)/2)+'px'});
        var $height2 = $(this).parent('.popup').outerHeight();
        $(this).css({'top':'-'+((($height1)-($height2))/2)+'px'});
    });
    $('.popup').click(function () {//点击弹出,无需绑定ID,动画待定
        $(this).find('.popup-list').toggle(250)
    });
});

