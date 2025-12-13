let main=document.querySelector(".main");
let search=document.querySelector(".input");

const URL = "https://movies-api-63ol.onrender.com/movies";

const getMovies=async (url)=>{
    try{
        const {data}=await axios.get(url);
        return data.results;
    }
    catch(error){}
};

let movies=await getMovies(URL);
console.log(movies);

function createCard(movies){
    for(let movie of movies)
    {
        let cardContainer=document.createElement("div");
        cardContainer.classList.add("card","shadow");

        let imageContainer=document.createElement("div");
        imageContainer.classList.add("card-image-container");

        let img=document.createElement("img");
        img.classList.add("card-image");
        img.setAttribute("src",movie.poster);
        imageContainer.appendChild(img);

        let moviedetailsContainer=document.createElement("div");
        moviedetailsContainer.classList.add("movie-details");

        let title=document.createElement("p");
        title.classList.add("title");
        title.innerText=movie.title;

        let genre=document.createElement("p");
        genre.classList.add("genre");
        genre.innerText=movie.genres;

        let ratingContainer=document.createElement("div");
        ratingContainer.classList.add("ratings");

        let starRatingContainer=document.createElement("div");
        starRatingContainer.classList.add("star-rating");

        let starIcon=document.createElement("span");
        starIcon.classList.add("material-icons-outlined");
        starIcon.innerText="star";
        starRatingContainer.appendChild(starIcon);

        let rating=document.createElement("span");
        rating.innerText=movie.rating;
        starRatingContainer.appendChild(rating);

        ratingContainer.appendChild(starRatingContainer);

        moviedetailsContainer.appendChild(title);
        moviedetailsContainer.appendChild(genre);
        moviedetailsContainer.appendChild(ratingContainer);

        cardContainer.appendChild(imageContainer);
        cardContainer.appendChild(moviedetailsContainer);

        main.appendChild(cardContainer);
    }
}

function searchHandler(e){
    let searchValue=e.target.value.toLowerCase();
    let filteredMovies=searchValue?.length>0?movies.filter((movie)=>movie.title.toLowerCase().startsWith(searchValue)||movie.director.toLowerCase().startsWith(searchValue)||movie.actors.join(",").toLowerCase().split(",").includes(searchValue)):movies;
    main.innerHTML="";
    createCard(filteredMovies);
}

function debounce(callback,delay){
    let timerid;
    return (...args)=>{
        clearTimeout(timerid);
        timerid=setTimeout(()=>{
            callback(...args)
        },delay);
    };
}

search.addEventListener("keyup",debounce(searchHandler,500));

createCard(movies);