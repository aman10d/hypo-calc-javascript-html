/*let a;
let b;
let c;
a=window.prompt("enter the value of A");
a=Number(a);
b=window.prompt("enter the value of B");
b=Number(b);
c=Math.pow(a,2)+Math.pow(b,2);
c=Math.sqrt(c);
console.log(c)*/
document.getElementById("b1").onclick=function(){
    let a=document.getElementById("t1").value;
    a=Number(a);
    let b=document.getElementById("t2").value;
    b=Number(b);
    let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("l3").innerHTML=c;
}