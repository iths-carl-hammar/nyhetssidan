const box = document.getElementById("box");

box.addEventListener("click",function(event){
    event.target.style.color = "red";

    setTimeout(function(){
        event.target.style = ""
    }, 500);
},      false);
   
//const tid = new Date();
//tid.setFullYear(2019);
//document.getElementById("item1").innerHTML = tid;


 const event  = document.getElementById("item1").addEventListener("click",displayDate);

function displayDate(){
    document.getElementById("demo").innerHTML = Date();
};



