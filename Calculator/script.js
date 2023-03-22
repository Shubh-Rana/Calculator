var valueT="";
var screen=document.getElementById("inputScreen");
var btn=document.querySelectorAll("button");
var btnArr=Array.from(btn);
// console.log(btnArr);
btnArr.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            valueT=eval(valueT);
            screen.value=valueT;
        }else if(e.target.innerHTML=='CE'){
            valueT="";
            screen.value=0;
        }else if(e.target.innerHTML=='DEL'){
            valueT=valueT.slice(0,-1);
            screen.value=valueT;
        }else{
            valueT+=e.target.innerHTML;
            screen.value=valueT;
        }

        
    })
})