let buttonContainer=document.querySelector(".buttonContainer");
let clockContainer=document.querySelector(".clock");

let sec=0,min=0,hour=0;
let timerid;

function displayTime(hour,min,sec)
{
    clockContainer.innerText=`${hour<10?`0${hour}`:hour}:${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`;
}

function buttonClick(e)
{
    let button=e.target.name;
    if(button==="start")
    {
        timerid=setInterval(()=>{
            sec++
            if(sec>59)
            {
                sec=0;
                min++;
            }
            else if(min>59)
            {
                min=0;
                hour++;
            }
        displayTime(hour,min,sec)},1000);
    }
    else if(button==="stop")
    {
        clearInterval(timerid);
    }
    else if(button==="reset")
    {
        clearInterval(timerid);
        hour=min=sec=0;
        displayTime(hour,min,sec);
    }
}

buttonContainer.addEventListener("click",buttonClick);