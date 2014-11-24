
$(document).ready(function() {//规定弹窗动作但是没有进行绑定
    //改变id为modal的按钮点击显示

    $('.btn-modal').click(function (event) {
        var $this = $(this);
        var modalName = $this.attr('data-modal');//获取用户的输入标记
        $(modalName).show();//识别了用户定义的id之后就直接显示
        $(modalName).find('.content').css({'opacity':0.6});
        $(modalName).find('.content').slideDown(200).fadeTo(10,1);
        event.stopPropagation();
    });

    //改变id为close的按钮点击隐藏
    $('.close').click(function (event) {
        $('.content').hide();
            $('.modal').hide();
        event.stopPropagation();
    });

});

$(document).bind('click',function(e){//点击空白区域隐藏弹出模态框
    var target  = $(e.target);
    if(target.closest('.modal-fl').length == 0){
        $('.content').hide();
        $('.modal').hide();
    }
    e.stopPropagation();
});