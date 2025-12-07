let modal=document.querySelector(".modal")
let open=document.querySelector(".open");

open.addEventListener("click",()=>{
    open.classList.add("hide");
    modal.classList.remove("hide");
});

modal.addEventListener("click",()=>{
    modal.classList.add("hide");
    open.classList.remove("hide");
})