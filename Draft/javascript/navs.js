


$(document).ready(function(){//这样不能每个都改 愁人

    var height = $('nav').find('.form').height();
    alert(height);
    $('nav').find('.form ').css({"margin-top":((50 - height)/2)+"px","margin-bottom":((50 - height)/2)+"px"});
});
