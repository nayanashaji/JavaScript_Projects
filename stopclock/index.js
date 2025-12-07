let buttonContainer=document.querySelector(".buttonContainer");
let clockContainer=document.querySelector(".clock");

let sec=0,min=0,hour=0;
let timerid;

function buttonClick(e)
{
    let button=e.target.name;
    if(button==="start")
    {
        timerid=setInterval(()=>{
            sec++
            if(sec>=59)
            {
                sec=0;
                min++;
            }
            else if(min>=59)
            {
                min=0;
                hour++;
            }
            clockContainer.innerText=`${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`
        },500);
    }
    if(button==="stop")
    {
        clearInterval(timerid);
    }
}

buttonContainer.addEventListener("click",buttonClick);