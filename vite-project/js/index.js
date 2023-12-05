import '../styles/style.css';
import {cards} from './main.js';
const DOMSelectors = {
   color: document.querySelector('#color'),
   Thing: document.getElementById("Card")
}
 // function populate(arr){
cards.forEach((card)=> {
   const FirstName = card.FirstName
   const LastName = card.LastName
   const Image = card.IMG
const card2 = ` <div class = "Card">
<h1> ${FirstName} </h1>
<h2> ${LastName} </h2> 
<img class ="imgs" src="${Image}"</div>`
DOMSelectors.Thing.insertAdjacentHTML('afterend', card2);
})
DOMSelectors.btn.addEventListener("click", GOATFilter());
function GOATFilter(){
   const GOATS = cards.filter(card => card.GOAT.includes("Yes"));
   DOMSelectors.Thing.innerHTML = "";
   GOATS.forEach((card) =>{
      const FirstName = card.FirstName
   const LastName = card.LastName
   const Image = card.IMG
const card2 = ` <div class = "Card">
<h1> ${FirstName} </h1>
<h2> ${LastName} </h2> 
<img class ="imgs" src="${Image}"</div>`
DOMSelectors.Thing.insertAdjacentHTML('afterend', card2);  })
}
GOATFilter()

/*  function filter(){
   let button = document.querySelectorAll("#btn")
   button.forEach((btn)=> btn.addEventListener("click", function(){
      let GOATFilter = cards.filter((cards)=> cards.GOAT.includes("Yes"),
      document.querySelector(".parent").innerHTML = "",
      populate(GOATFilter),
 }))}
 */

DOMSelectors.color.addEventListener("click", function(){
   if (document.body.classList.contains("dark")){
      document.body.classList.add("light");
      document.body.classList.remove("dark");
   } else{
         document.body.classList.add("dark");
         document.body.classList.remove("light");}

      });

