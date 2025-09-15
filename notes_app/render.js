export const rendernotes=(notes)=>
{
    let newnotes=notes.map(({id,title,note,pin,archive})=>
    {
        return(
            `<div>
                <div>
                    <h4> ${title} </h4>
                    <button data-type="delete" data-id=${id}>Delete</button>
                </div>
                <div>
                    <p>${note}</p>
                    <button data-type="pin" data-id=${id}>pin</button>
                    <button fata-type="archive" data-id=${id}>archive</button>
                </div>
            </div>`
        )
    });
    newnotes=newnotes.join("");
    return newnotes;
}