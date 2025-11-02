import { createProductCard } from "./createProductCard.js";
import { findProductInCart } from "./findProductInCart.js";

let cartContainer=document.getElementById("cart");
let cart=JSON.parse(localStorage.getItem("cart"))||[];

cartContainer.addEventListener("click",(e)=>{
    cart=cart.filter(({_id})=>_id!==e.target.dataset.id);
    cartContainer.innerHTML="";
    createProductCard(cart,cartContainer,findProductInCart,"cart");
    localStorage.setItem("cart",JSON.stringify(cart));
});

createProductCard(cart,cartContainer,findProductInCart,"cart");