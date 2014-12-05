

$(document).ready(function(){
    /*暂时解决解决使用forms时的垂直居中问题，编译css之后删除*/
    $('.nav').each(function(){
        var $this = $(this);
        $this.find('.form ').css({'margin-top':'calc(0.5em - 1px)'});
        $this.find('.form .input-xl').parents(".form").css({'margin-top':'calc(0.2em - 1px)'});
        $this.find('.form .input-lg').parents(".form").css({'margin-top':'calc(0.3636em - 1px)'});
        $this.find('.form .input-sm').parents(".form").css({'margin-top':'calc(0.65em - 1px)'});
        $this.find('.form .input-xs').parents(".form").css({'margin-top':'calc(0.8em - 1px)'});
    });
});
