import { rendernotes } from "./render.js";

let title=document.getElementById("title");
let note=document.getElementById("note");
let add=document.getElementById("add");
let othernotes=document.getElementById("othernote");
let pinnednotes=document.getElementById("pinnote");
let notesarr=[];

add.addEventListener("click",(e)=>
{
    if(title.value.trim!="" || note.value.trim!="")
    {
        notesarr=[...notesarr,{id:Date.now(), title: title.value.trim(), note:note.value.trim(), pin:false, archive:false}]
        othernotes.innerHTML=rendernotes(notesarr);
    }
});