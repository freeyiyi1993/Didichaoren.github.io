


$(document).ready(function(){
    /*解决使用forms时的垂直居中问题*/
    $('.nav').each(function(){
        var $this = $(this);
        var Height1 =  $this.height();
        var Height = Height1 - 0.2 ;

        var height5 = $this.find('.form input.input-xl').parents(".form").height();
        $this.find('.form input.input-xl').parents(".form")
            .css({
                "margin-top":((Height - height5)/2)+"px",
                "margin-bottom":((Height - height5)/2)+"px"
            });

        var height4 = $this.find('.form input.input-lg').parents(".form").height();
        $this.find('.form input.input-lg').parents(".form")
            .css({
                "margin-top":((Height - height4)/2)+"px",
                "margin-bottom":((Height - height4)/2)+"px"
            });

        var height = $this.find('.form').height();
        $this.find('.form ')
            .css({
                "margin-top":((Height - height)/2)+"px",
                "margin-bottom":((Height - height)/2)+"px"
            });

        var height2 = $this.find('.form input.input-sm').parents(".form").height();
        $this.find('.form input.input-sm').parents(".form")
            .css({
                "margin-top":((Height - height2)/2)+"px",
                "margin-bottom":((Height - height2)/2)+"px"
            });

        var height3 = $this.find('.form input.input-xs').parents(".form").height();
        $this.find('.form input.input-xs').parents(".form")
            .css({
                "margin-top":((Height - height3)/2)+"px",
                "margin-bottom":((Height - height3)/2)+"px"
            });

    });

});
