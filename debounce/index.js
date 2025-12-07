let input=document.querySelector("input");
let timerid;

function inputhandler(e)
{
    console.log(e.target.value);
}

function debounce(callback,delay)
{
    return function (...args){
        clearTimeout(timerid);
        timerid=setTimeout(()=>callback(...args),delay);
    }
}

input.addEventListener("keyup",debounce(inputhandler,500));