import { rendernotes } from "./render.js";

let title=document.getElementById("title");
let note=document.getElementById("note");
let add=document.getElementById("add");
let othernotes=document.getElementById("othernote");
let pinnednotes=document.getElementById("pinnote");
let displaynotes=document.getElementById("displaynotes");
let notesarr=[];

add.addEventListener("click",(e)=>
{
    if(title.value.trim()!='' || note.value.trim()!='')
    {
        notesarr=[...notesarr,{id:Date.now(), title: title.value.trim(), note:note.value.trim(), pin:false, archive:false}]
        othernotes.innerHTML=rendernotes(notesarr);
        note.value=title.value="";
    }
});

displaynotes.addEventListener("click",(e)=>
{
    let type=e.target.dataset.type;
    let noteid=e.target.dataset.id;
    switch(type)
    {
        case "delete":
            notesarr=notesarr.filter(({id})=>id.toString()!==noteid);
            othernotes.innerHTML=rendernotes(notesarr);
            break;
        case "pin":
            notesarr=notesarr.map(note=>note.id.toString()===noteid?{...note,pin:!note.pin}:note);
            pinnednotes.innerHTML=rendernotes(notesarr.filter(({pin})=>pin));
            othernotes.innerHTML=rendernotes(notesarr.filter(({pin})=>!pin));
            break;
    }
})