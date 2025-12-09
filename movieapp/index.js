let main=document.querySelector(".main");

const URL = "https://movies-app.prakashsakari.repl.co/api/movies";

const getMovies=async (url)=>{
    try{
        const {data}=await axios.get(url);
        return data;
    }
    catch(error){}
};

let movies=await getMovies(URL);
console.log(movies);