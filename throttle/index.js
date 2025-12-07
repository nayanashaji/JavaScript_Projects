let text=document.querySelector(".text");

function handler()
{
    console.log("scroll");
}

function throttle(callback,delay)
{
    let waiting=false;
    return (...args)=>{
        if(waiting) return;
        callback(...args);
        waiting=true;
        setTimeout(()=>{
            waiting=false;
        },delay)
    }
}

text.addEventListener("scroll",throttle(handler,500));