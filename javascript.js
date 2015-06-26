
function addrow(){
    var table = document.getElementById('myTable'),
        count = table.rows[0].cells.length,
        y = table.insertRow(),
        i = 0;

    for(i; i < count; i++) {
        var x = y.insertCell(i);
    }
}

function addcol(){
    var table = document.getElementById('myTable'),
        oRows = table.getElementsByTagName('tr'),
        i = 0;

    for(i; i < oRows.length; i++) {
        oRows[i].insertCell();

    }
}

function deleteRow(id){

    var i = id.parentNode.parentNode.rowIndex,
        table = document.getElementById("myTable");
    if(table.rows.length !=1) {
        document.getElementById('myTable').deleteRow(i);
    }
}

function deleteCell(){

    var table = document.getElementById("myTable"),
        count = table.rows.length,
        i = 0;

    for (i; i < count; i++) {
        if (table.rows[i].cells.length != 1) {
            table.rows[i].deleteCell();
        }
    }
}

function showButton(elem, rowsCount, cellCount) {

    if(cellCount != 1) {
        var topButton = document.getElementsByClassName('buttonDelRow'),
            r = elem.getBoundingClientRect(),
            buttonStyleRow = topButton[0].style;
        buttonStyleRow.visibility = "visible";
        buttonStyleRow.left = r.left + 'px';
    }
    if(rowsCount != 1) {
        var leftButton = document.getElementsByClassName('buttonDelCell'),
            buttonStyleCell = leftButton[0].style;
        buttonStyleCell.visibility = "visible";
        buttonStyleCell.top = r.top + 'px';
    }
}

function hideButton(e){
    if(document.elementFromPoint(e.clientX, e.clientY).tagName === 'TD' ||
        document.elementFromPoint(e.clientX, e.clientY).tagName === 'TABLE' ||
        document.elementFromPoint(e.clientX, e.clientY).tagName === 'BUTTON'){
    }else {
        setTimeout(function () {
            hide(e)
        }, 1000);
    }
}

function hide(e){
    var div = document.getElementsByClassName('buttonDelRow'),
        style = div[0].style;
        style.visibility = "hidden";

    var div = document.getElementsByClassName('buttonDelCell'),
        style = div[0].style;
        style.visibility = "hidden";
}

function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect(),
        body = document.body,
        docElem = document.documentElement;

    var scrollTop = window.pageXOffset || body.clientTop || body.scrollTop,
        scrollLeft = window.pageYOffset || body.clientLeft || body.scrollLeft;

    var clientTop = docElem.clientTop || body.clientTop || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop + clientTop,
        left = box.left + scrollLeft + clientLeft ;

    return {top: Math.round(top), left: Math.round(left)}

}

function getButtonCoordinates(e){

    var table = document.getElementById('myTable'),
        rowsCount = table.rows[0].cells.length,
        cellCount = table.getElementsByTagName('tr').length;

    if(document.elementFromPoint(e.clientX, e.clientY).tagName === 'TD'){
        var buttonlocation = document.elementFromPoint(e.clientX, e.clientY);
        showButton(buttonlocation, rowsCount, cellCount);
    }
}