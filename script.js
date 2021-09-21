var nums=document.querySelectorAll('[number]');
var oprands=document.querySelectorAll('[operator]');

var clearall=document.querySelector('[clearAll]');
var equals=document.querySelector('[equals]');

var current=document.querySelector('.current');
var prev=document.querySelector('.prev');
var sign=document.querySelector('.sign');
var hist=document.querySelector('.history');


nums.forEach(number => {
    number.addEventListener("click", ()=>{
        current.innerHTML+=number.innerHTML;
    })
});

oprands.forEach(operator => {
    operator.addEventListener("click", ()=>{
        prev.innerHTML=current.innerHTML;
        current.innerHTML="";
        sign.innerHTML=operator.innerHTML;
    })
});

clearall.addEventListener("click", ()=>{
    current.innerHTML="";
    prev.innerHTML="";
    sign.innerHTML="";
})

equals.addEventListener("click",()=>{
   var div1=document.createElement('div');
   div1.innerHTML=prev.innerHTML+sign.innerHTML+current.innerHTML;
   hist.appendChild(div1);

    
    var answer;
    if(sign.innerHTML=="+"){
        answer=parseInt(prev.innerHTML)+parseInt(current.innerHTML);
        prev.innerHTML=current.innerHTML;
        current.innerHTML=answer;
    }
    else if(sign.innerHTML=="-"){
        answer=parseInt(prev.innerHTML)-parseInt(current.innerHTML);
        prev.innerHTML=current.innerHTML;
        current.innerHTML=answer;
    }
    else if(sign.innerHTML=="*"){
        answer=parseInt(prev.innerHTML)*parseInt(current.innerHTML);
        prev.innerHTML=current.innerHTML;
        current.innerHTML=answer;
    }
    else if(sign.innerHTML=="/"){
        answer=parseInt(prev.innerHTML)/parseInt(current.innerHTML);
        prev.innerHTML=current.innerHTML;
        current.innerHTML=answer;
    }
    else if(sign.innerHTML=="^"){
        answer=1;
        for(let i=0 ;i<current.innerHTML;i++){
            answer*=prev.innerHTML;
        }
        prev.innerHTML=current.innerHTML;
        current.innerHTML=answer;
    } 

    var div2=document.createElement('span');
   div2.innerHTML="="+answer;
   div1.appendChild(div2);
    
})


