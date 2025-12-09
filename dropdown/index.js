let countrylist=document.querySelector(".countrylist");
let dropdown=document.querySelector(".dropdown");
let search=document.querySelector(".search");


let countries=[
  { id: 1, country: "America" },
  { id: 2, country: "Australia" },
  { id: 3, country: "Afghanistan" },
  { id: 4, country: "India" },
  { id: 5, country: "Indonesia" },
  { id: 5, country: "China" },
  { id: 6, country: "Japan" },
  { id: 7, country: "Pakistan" },
];

function displayCountries(countries){
    for(let country of countries){
        let name=document.createElement("p");
        name.innerHTML=country.country;
        countrylist.appendChild(name);
    }
}

displayCountries(countries);

search.addEventListener("click",()=>{
    countrylist.classList.toggle("hide");
    search.innerHTML="";
});

search.addEventListener("keyup",(e)=>{
    if(e.target.value.trim()!=="")
    {
        countrylist.innerHTML="";
        let val=e.target.value.toLowerCase();
        let filteredlist=countries.filter(({country})=>country.toLowerCase().startsWith(val));
        displayCountries(filteredlist);
    }
    else{
        displayCountries(countries);
    }
});