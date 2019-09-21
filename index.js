function myfunction(){
var money = document.getElementById('dollar').value;
var select = document.getElementById('myselect').value;
var divide = document.getElementById('number').value;
//document.getElementById('amount1').innerHTML=money;
//document.getElementById('amount2').innerHTML=select;
//document.getElementById('amount3').innerHTML=divide;
if(money==""){
    alert('please something order here.')
}
if(divide<=1 || divide==""){
    divide=1;
}

var x= (money*select)/divide;
document.getElementById('amount').innerHTML=x;
}

