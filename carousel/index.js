let carousel=document.querySelectorAll(".carousel-img");
let nextButton=document.querySelector(".right");
let prevButton=document.querySelector(".left");

let currentslide=0;
maxslide=carousel.length-1;

carousel.forEach((image,index) => 
    (image.style.transform=`translateX(${index*100}%)`)
);

nextButton.addEventListener("click",()=>{
    if(currentslide===maxslide)
    {
        currentslide=0;
    }
    else
    {
        currentslide++;
    }
    carousel.forEach((image,index) => 
    (image.style.transform=`translateX(${(index-currentslide)*100}%)`)
);
})