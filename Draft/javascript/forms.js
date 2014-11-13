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

    $('.form').each(function(){//使得form中的span具有tab属性
        $(this).find('.file').attr("tabIndex", "0");
    });

    $('.input-info').each(function(){
        var height = $(this).parent('.input-group')
            .children('input').height();//解决input-info中使用radio、checkbox的大小问题
        $(this).css({"height":(height)+"px","width":(height)+"px"});
    });

});