

$(document).ready(function(){

    $('.btn-dropdown').click(function(){
        var $this   = $(this);
        var dropdownName = $this.attr('data-dropdown');//获取用户的输入标记(ul)
        $(dropdownName).toggle();//识别了用户定义的id之后就直接显示
    });

    //点击其他地方隐藏点击隐藏(暂时不会)
    $('.close').click(function(){//直接关闭
        $('.modal').hide();
        $('.content').hide({height:'hide'},"slow");
    });

});
