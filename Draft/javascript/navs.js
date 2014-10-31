


$(document).ready(function(){

    var height5 = $('nav').find('.form input.input-xl').parents(".form").height();
    $('nav').find('.form input.input-xl').parents(".form").css({"margin-top":((50 - height5)/2)+"px"});

    var height4 = $('nav').find('.form input.input-lg').parents(".form").height();
    $('nav').find('.form input.input-lg').parents(".form").css({"margin-top":((50 - height4)/2)+"px"});

    var height = $('nav').find('.form').height();
    $('nav').find('.form ').css({"margin-top":((50 - height)/2)+"px"});

    var height2 = $('nav').find('.form input.input-sm').parents(".form").height();
    $('nav').find('.form input.input-sm').parents(".form").css({"margin-top":((50 - height2)/2)+"px"});

    var height3 = $('nav').find('.form input.input-xs').parents(".form").height();
    $('nav').find('.form input.input-xs').parents(".form").css({"margin-top":((50 - height3)/2)+"px"});

});
