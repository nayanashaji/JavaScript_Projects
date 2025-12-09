let main=document.querySelector(".main");

const URL = "https://api.tvmaze.com/shows";

const getMovies=async (url)=>{
    try{
        const {data}=await axios.get(url);
        return data;
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
        img.setAttribute("src",movie.image.medium);
        imageContainer.appendChild(img);

        let moviedetailsContainer=document.createElement("div");
        moviedetailsContainer.classList.add("movie-details");

        let title=document.createElement("p");
        title.classList.add("title");
        title.innerText=movie.name;

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
        rating.innerText=movie.rating.average;
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

createCard(movies);