export const rendernotes=(notes)=>
{
    let newnotes=notes.map(({id,title,note,pin,archive})=>
    {
        return(
            `<div>
                <div>
                    <h4> ${title} </h4>
                    <button><span class="material-symbols-outlined" data-type="delete" data-id=${id}>delete</span></button>
                </div>
                <div>
                    <p>${note}</p>
                    <button>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${pin ? 1 : 0}"  data-type="pin" data-id=${id}>keep</span>
                    </button>
                    <button>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' ${archive?1:0}" data-type="archive" data-id=${id}>archive</span>
                    </button>
                </div>
            </div>`
        )
    });
    newnotes=newnotes.join("");
    return newnotes;
}