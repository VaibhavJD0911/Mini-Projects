//Random Color Generator
const RandomColor=function(){
   let hex="0123456789ABCDEF"
   let color="#"; 

   for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
   }

   return color;
}
let IntervalId;
const StartChangingColor=function(){

    IntervalId=setInterval(ChangeBg,1000);

    function ChangeBg(){
    document.body.style.backgroundColor=RandomColor();
         }
}

const StopChangingColor=function(){
    clearInterval(IntervalId);
}



document.querySelector(".Start").addEventListener('click',StartChangingColor);
document.querySelector(".Stop").addEventListener('click',StopChangingColor);


