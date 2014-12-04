


$(document).ready(function(){
    /*暂时解决解决使用forms时的垂直居中问题，编译css之后删除*/
    $('.nav').each(function(){
        $(this).find('.form').find('.input-group').css({
            'margin':'calc(0.5em - 1px) 0'
        });
    });

});
