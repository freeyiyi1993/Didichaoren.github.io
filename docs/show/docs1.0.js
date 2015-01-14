/**
 * Created by Didi on 2015/01/14.
 */
$(document).ready(function(){
    $("#css").click(function(event){/*CSS*/
        var $this = $(this);
        $this.siblings("#cssMenu").show(300);
        $this.siblings("#back").show(300);
        $this.siblings("#group").hide(300);
        $this.siblings("#js").hide(300);
        event.stopPropagation();
    });
    $("#group").click(function(event){/*Group*/
        var $this = $(this);
        $this.css({
            "margin-top":"30px",
            "border-top":"1px solid #fff"
        });
        $this.siblings("#groupMenu").show(300);
        $this.siblings("#back").show(300);
        $this.siblings("#css").hide(300);
        $this.siblings("#js").hide(300);
        event.stopPropagation();
    });
    $("#js").click(function(event){/*JS*/
        var $this = $(this);
        $this.css({
            "margin-top":"30px",
            "border-top":"1px solid #fff"
        });
        $this.siblings("#jsMenu").show(300);
        $this.siblings("#back").show(300);
        $this.siblings("#group").hide(300);
        $this.siblings("#css").hide(300);
        event.stopPropagation();
    });
    $("#back").click(function(event) {/*JS*/
        var $this = $(this);
        $this.siblings("#cssMenu").hide(300);
        $this.siblings("#groupMenu").hide(300);
        $this.siblings("#jsMenu").hide(300);
        $this.hide(300);
        $this.siblings("#group").show(300);
        $this.siblings("#css").show(300);
        $this.siblings("#js").show(300);
        $("#group").css({
            "margin-top":"0",
            "border-top":"0"
        });
        $("#js").css({
            "margin-top":"0",
            "border-top":"0"
        });
        event.stopPropagation();
    })

});