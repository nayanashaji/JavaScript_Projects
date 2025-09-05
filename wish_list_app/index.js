let inputtext=document.getElementById("input");
let addbutton=document.getElementById("add");
let wishlist=[];
let wishobj;
let wishcontainer=document.querySelector(".wishcontainer");
addbutton.addEventListener("click",addwish);
function generateid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function (param)
{
    let number=Math.random()*16|0;
    let randomnumber=param=='x'?number:(number & 0x3|0x8);
    return randomnumber.toString(16);
});
}
function addwish()
{
    if(inputtext.value.trim()!="")
    {
        wishlist.push({id:generateid(), wish:inputtext.value, completed:false});
    }
    showlist();
}
function showlist()
{
    wishcontainer.innerHTML=wishlist.map(wishobj=>
        `<div><input type="checkbox" id="item-${wishobj.id}">
        <label for="item-${wishobj.id}">${wishobj.wish}</label>
        <button> DELETE </button><div>`).join("");
}