//var table = document.createElement('table');
//var tbody = document.createElement('tbody');
//table.appendChild(tbody);
//
//for (var i = 0; i <= 9; i++) {
//    var rowcount = i + 1;
//    tbody.insertRow(i);
//    tbody.rows[i].insertCell(0);
//    tbody.rows[i].insertCell(1);
//    tbody.rows[i].insertCell(2);
//    tbody.rows[i].cells[0].appendChild(document.createTextNode('Row ' + rowcount + ', Cell 1'));
//    tbody.rows[i].cells[1].appendChild(document.createTextNode('Row ' + rowcount + ', Cell 2'));
//    tbody.rows[i].cells[2].appendChild(document.createTextNode('Row ' + rowcount + ', Cell 3'));
//}
//
//table.createCaption();
//table.caption.appendChild(document.createTextNode('A DOM-Generated Table'));
//
//var caltable = document.getElementById('cal-table');
//caltable.appendChild(table);
////document.body.appendChild(table);

$(document).ready(function () {
    //.number
    var num;
    $('.number>div>div:first-child').click(function () {
        num = $('.number>input').prop('value');
        $('.number>input').prop('value',parseInt(num)+parseInt(1));
    })
    $('.number>div>div:last-child').click(function () {
        num = $('.number>input').prop('value');
        $('.number>input').prop('value',parseInt(num)-parseInt(1));
    });

    //.color
    $('<div class="colors"></div>').appendTo('.color');
    for(var i = 0;i<36;i++) {
        $('<span></span>').appendTo('.colors').css('background-color','#efefef');
    }
    $('.color').click(function(){

    });
});
