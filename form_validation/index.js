let form=document.getElementById("form");
let firstname, lastname, email, password;
let createbutton=document.getElementById("createbutton");
let errors=document.querySelectorAll(".error");
let emptyfields=document.querySelectorAll(".empty");

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for(let error of errors)
{
    error.classList.add("hide");
}
for(let empty of emptyfields)
{
    empty.classList.add("hide");
}

form.addEventListener("keyup", (event)=>
{
    event.preventDefault();
    let key=event.target.dataset.key;
    switch(key)
    {
        case "firstname":
            firstname=event.target.value;
            break;
        case "lastname":
            lastname=event.target.value;
            break;
        case "email":
            email=event.target.value;
            break;
        case "password":
            password=event.target.value;
            break;
        default:
            firstname=lastname=email=password="";
            break;
    }
})
createbutton.addEventListener("click",(event)=>
{
    event.preventDefault();
    if(firstname)
    {
        emptyfields[0].classList.add("hide");
        if(!nameRegex.test(firstname))
        {
            errors[0].classList.remove("hide");
        }
        else{
            errors[0].classList.add("hide");
        }
    }
    else{
        emptyfields[0].classList.remove("hide");
        errors[0].classList.add("hide");
    }
    if(lastname)
    {
        emptyfields[1].classList.add("hide");
        if(!nameRegex.test(lastname))
        {
            errors[1].classList.remove("hide");
        }
        else{
            errors[1].classList.add("hide");
        }
    }
    else{
        emptyfields[1].classList.remove("hide");
        errors[1].classList.add("hide");
    }
    if(email)
    {
        emptyfields[2].classList.add("hide");
        if(!emailRegex.test(email))
        {
            errors[2].classList.remove("hide");
        }
        else{
            errors[2].classList.add("hide");
        }
    }
    else{
        emptyfields[2].classList.remove("hide");
        errors[2].classList.add("hide");
    }
    if(password)
    {
        emptyfields[3].classList.add("hide");
        if(!passwordRegex.test(password))
        {
            errors[3].classList.remove("hide");
        }
        else
        {
            errors[3].classList.add("hide");
        }
    }
    else{
        emptyfields[3].classList.remove("hide");
        errors[3].classList.add("hide");
    }
})