



$(document).ready(function(){
    //改变id为modal的按钮点击显示
    $('#modal').click(function(){
            $('.modal').show();
            $('.content').animate({height:'toggle'});
        });


    //改变id为close的按钮点击隐藏
    $('#close').click(function(){
        $('.modal').hide();
        $('.content').animate({height:'toggle'});
    })
});
