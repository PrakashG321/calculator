let value="";
var button=document.querySelectorAll(".btn")
for (i=0;i<button.length;i++)
button[i].addEventListener("click", function(e){


 if(e.target.innerHTML=="="){
    value=eval(value);
    document.querySelector(".text").value=value;

 }else if(e.target.innerHTML=="AC"){
    value="";
    document.querySelector(".text").value=value;
 }
 else if(e.target.innerHTML=="DEL"){
    value=value.slice(0,-1);
    document.querySelector(".text").value=value;
 }
 
 
 else{
  value+=e.target.innerHTML;
  document.querySelector(".text").value=value;
 }
 
})