

$(document).ready(function(){
    var dropdownName;
    var i;
    $('.btn-dropdown').click(function(){
        var $this   = $(this);
        dropdownName = $this.attr('data-dropdown');//获取用户的输入标记
        $(dropdownName).toggle(200);//识别了用户定义的id之后就直接显示
    });

    //点击其他地方隐藏点击隐藏
//    $(document).bind("click",function(e){
//        var target  = $(e.target);//表示当前对象，切记，如果没有e这个参数，即表示整个BODY对象
//        if(target.closest(dropdownName).length == 0){
//            $(dropdownName).hide();
//        }
//    });

    //解决divider的大小问题,效率很可能是问题。
    var sum = $('.dropdown').find('.divider').parent('.dropdown-list');
    for (i = 0; i < sum.length; i++) {
        var width = $('.dropdown').find('.divider').eq(i).parent('.dropdown-list').width();
        console.log(width);
        $('.dropdown').find('.divider').eq(i).css({
            "border-left": (width / 2) + "px solid transparent",
            "border-right": (width / 2) + "px solid transparent"
        });
    }
    $(window).resize(function() {
        var sum = $('.dropdown').find('.divider').parent('.dropdown-list');
        for (i = 0; i < sum.length; i++) {
            var width = $('.dropdown').find('.divider').eq(i).parent('.dropdown-list').width();
            console.log(width);
            $('.dropdown').find('.divider').eq(i).css({
                "border-left": (width / 2) + "px solid transparent",
                "border-right": (width / 2) + "px solid transparent"
            });

        }
    });

});
