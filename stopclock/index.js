let buttonContainer=document.querySelector(".buttonContainer");
let clockContainer=document.querySelector(".clock");

let sec=0,min=0,hour=0;

function buttonClick(e)
{
    let button=e.target.name;
    if(button==="start")
    {
        setInterval(()=>{
            sec++
            if(sec>=59)
            {
                sec=0;
                min++;
            }
            clockContainer.innerText=`${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`
        },100);
    }
}

buttonContainer.addEventListener("click",buttonClick);