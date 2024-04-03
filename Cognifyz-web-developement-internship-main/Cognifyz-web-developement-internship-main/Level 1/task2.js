var num1,num2,result;
function add()
{
num1=Number(document.getElementById("txtnum1").value);
num2=Number(document.getElementById("txtnum2").value);
result=num1+num2;
document.getElementById("txtresult").value=result;
}