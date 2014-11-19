


$(document).ready(function(){
    /*解决使用forms时的垂直居中问题*/
    $('.nav').each(function(){

        var height5 = $(this).find('.form input.input-xl').parents(".form").height();
        $(this).find('.form input.input-xl').parents(".form").css({"margin-top":((50 - height5)/2)+"px"});

        var height4 = $(this).find('.form input.input-lg').parents(".form").height();
        $(this).find('.form input.input-lg').parents(".form").css({"margin-top":((50 - height4)/2)+"px"});

        var height = $(this).find('.form').height();
        $(this).find('.form ').css({"margin-top":((50 - height)/2)+"px"});

        var height2 = $(this).find('.form input.input-sm').parents(".form").height();
        $(this).find('.form input.input-sm').parents(".form").css({"margin-top":((50 - height2)/2)+"px"});

        var height3 = $(this).find('.form input.input-xs').parents(".form").height();
        $(this).find('.form input.input-xs').parents(".form").css({"margin-top":((50 - height3)/2)+"px"});

    });

});
