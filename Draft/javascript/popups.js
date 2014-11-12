

$(document).ready(function() {


    $('.popup-bottom').each(function(){
        var $width1 = $(this).parent('.popup').outerWidth();
        var width1 = Math.abs(((240-($width1))/2));//解决超长按钮居中问题
        if(240>$width1){
            $(this).css({'left': '-' + width1 + 'px'});
        }else{
            $(this).css({'left': + width1 + 'px'});
        }
        if($(this).find('.popup-header').length===0) {
            $(this).find('.popup-triangle').css({'color': 'white'})
        }
    });
    $('.popup-top').each(function(){
        var $width2 = $(this).parent('.popup').outerWidth();
        var width2 = Math.abs(((240-($width2))/2));//解决超长按钮居中问题
        if(240>$width2){
            $(this).css({'left': '-' + width2 + 'px'});
        }else{
            $(this).css({'left': + width2 + 'px'});
        }
        if($(this).find('.popup-header').length===0) {
            $(this).find('.popup-triangle').css({'color': 'white'})
        }
    });
    $('.popup-left').each(function(){
        var $width3 = $(this).parent('.popup').outerWidth();
        $(this).css({'right':(($width3)+16)+'px'});
        var $height1 = $(this).outerHeight();
        $(this).find('.popup-triangle').css({'top':((($height1)-34)/2)+'px'});
        var $height2 = $(this).parent('.popup').outerHeight();
        var height2 = Math.abs(((($height1)-($height2))/2));
        if($height1>$height2) {
            $(this).css({'top': '-' + height2 + 'px'});
        }else{
            $(this).css({'top': height2 + 'px'});
        }
    });
    $('.popup-right').each(function(){
        var $width4 = $(this).parent('.popup').outerWidth();
        $(this).css({'left':(($width4)+16)+'px'});
        var $height3 = $(this).outerHeight();
        $(this).find('.popup-triangle').css({'top':((($height3)-34)/2)+'px'});
        var $height4 = $(this).parent('.popup').outerHeight();
        var height4 = Math.abs(((($height3)-($height4))/2));
        if($height3>$height4) {
            $(this).css({'top': '-' + height4 + 'px'});
        }else{
            $(this).css({'top': height4 + 'px'});
        }
    });
    $('.popup').click(function () {//点击弹出,无需绑定ID,动画待定
        $(this).find('.popup-list').toggle(250)
    });
});
