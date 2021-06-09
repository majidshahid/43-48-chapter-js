function show(){
    alert("Hello world")
}

function msg(){
    alert("Thank for perchassing a mobile from us")
}
function delet(a){
var b =a.parentNode.rowIndex;
document.getElementById('table').deleteRow(b)
}

var a ;
function inc(){
    a +=1;
    console.log(a)
    document.getElementById("num").innerHTML=a
}