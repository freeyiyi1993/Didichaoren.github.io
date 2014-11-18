/**
 * Created by Didi on 2014/10/16.
 */

function lost()
{
    var input=document.getElementByIdx_x("input");
    var input_value=input.value;
    if(input_value=="")
    {
        input.value="请输入";
        input.style.color="gray";
    }
}

function get()
{
    var input=document.getElementByIdx_x("input");
    input.value="";
    input.style.color="black";
}


$(document).ready(function(){

    $('.form').each(function(){
        $(this).find('.file').attr("tabIndex", "0");//使得form中的span具有tab属
    });

    $('.input-info').each(function(){
        var height = $(this).parent('.input-group')
            .children('input').height();//解决input-info中使用radio、checkbox的大小问题
        $(this).css({"height":(height)+"px","width":(height)+"px"});
    });
//    $('.input-xs').children('.input-info').each(function(){
//        var height2 = $(this).parent('.input-group').children('input').height();
//        $(this).css({"max-height":(height2)+1+"px"});
//    });
//    $('.input-xl').find('input[type="checkbox"]').each(function(){
//        var height3 = $(this).parent('.input-info').parent('.input-group').children('input').height();
//        $(this).parent('.input-info').css({"max-height":(height3)-1+"px"});
//    });



    $('input[type="radio"]').each(function(){
        if($(this).attr('disabled')){
            var radioid=$(this).attr('id');
            $(this).wrap('<div class="radio-input" disabled="disabled"></div>');
            $(this).after('<label for='+radioid+' disabled="disabled"></label>');
        }else{
        var radioid=$(this).attr('id');
        $(this).wrap('<div class="radio-input"></div>');
        $(this).after('<label for='+radioid+'></label>');
        }
    });
    $('input[type="checkbox"]').each(function(){
        if($(this).attr('disabled')){
            var checkboxid=$(this).attr('id');
            $(this).wrap('<div class="checkbox-input" disabled="disabled"></div>');
            $(this).after('<label for='+checkboxid+' disabled="disabled"></label>');
        }else {
            var checkboxid = $(this).attr('id');
            $(this).wrap('<div class="checkbox-input"></div>');
            $(this).after('<label for=' + checkboxid + '></label>');
        }
    });
});


