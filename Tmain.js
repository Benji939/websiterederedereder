var inputs1=[]
var inputs2=[]
function showpara1()
{  for (var i=1;i<=6;i++){
        inputs1.push(document.getElementById("1st" + i).value);
     
        document.getElementById("para1").innerHTML=inputs1.join(". ");
    }
  
console.log(inputs1)
}
function showpara2()
{  for (var i=1;i<=6;i++){
        inputs2.push(document.getElementById("2nd" + i).value);
     
        document.getElementById("para2").innerHTML=inputs2.join(". ");
    }
  
console.log(inputs2)
}