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


$(document).ready(function(){//使得form中的span具有tab属性

    $('.form').ready(function(){
        $(this).find('span').attr("tabIndex", "0");
        var height = $(this).find('.input-group input').height();//解决input-info中使用radio、checkbox的大小问题
        $(this).find('.input-group .input-info').css({"height":(height)+"px"});
        $(this).find('.input-group .input-info').css({"width":(height)+"px"});
    });

});