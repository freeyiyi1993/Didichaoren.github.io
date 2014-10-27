



$(document).ready(function(){//规定弹窗动作但是没有进行绑定
    //改变id为modal的按钮点击显示

    $('.btn-modal').click(function(){
            var $this   = $(this);
            var modalName = $this.attr('data-modal');//获取用户的输入标记
            $(modalName).show();//识别了用户定义的id之后就直接显示
            $(modalName).find('.content').animate({height:'show'});
        });

    //改变id为close的按钮点击隐藏
    $('.close').click(function(){//直接关闭
        $('.modal').hide();
        $('.content').hide({height:'hide'},"slow");
    })
});

