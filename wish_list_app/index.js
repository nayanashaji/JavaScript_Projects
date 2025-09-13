let inputtext=document.getElementById("input");
let addbutton=document.getElementById("add");
let wishobj;
let localdata= JSON.parse(localStorage.getItem("wishobj"));
let wishlist=localdata || [];

let wishcontainer=document.querySelector(".wishcontainer");

addbutton.addEventListener("click",addwish);

wishcontainer.addEventListener("click",(e)=>
{
let key=e.target.dataset.key;
let delkey=e.target.dataset.delkey;
wishlist=wishlist.map(wishobj=> wishobj.id===key? {...wishobj,completed:!wishobj.completed}:wishobj);
wishlist=wishlist.filter(wishobj=> wishobj.id!==delkey);
showlist();
localStorage.setItem("wishobj",JSON.stringify(wishlist));
})

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
    localStorage.setItem("wishobj",JSON.stringify(wishlist));
    showlist();
    inputtext.value="";
    
}
function showlist()
{
    wishcontainer.innerHTML=wishlist.map(wishobj=>
        `<div><input type="checkbox" id="item-${wishobj.id}" data-key=${wishobj.id} ${wishobj.completed? "checked":""}>
        <label for="item-${wishobj.id}" class="${wishobj.completed? "cutline" : ""}" data-key=${wishobj.id}>${wishobj.wish}</label>
        <button><span data-delkey=${wishobj.id} class="material-symbols-outlined">delete</span> </button><div>`).join("");
}
showlist();