import '../styles/style.css';
import {cards} from './main.js';
const DOMSelectors = {
   color: document.querySelector('#color'),
   Thing: document.getElementById("Card"),
   btn : document.getElementById("btn"),
   app : document.getElementById('app')
}

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
function CardFilter(){
   DOMSelectors.btn.addEventListener("click",function(){
      DOMSelectors.app.innerHTML = ''
      const filterCards =  cards.filter((card) => card.GOAT.includes("Yes")).forEach((card) => this.insertAdjacentHTML("afterend",`<div> <h1>${card.FirstName} ${card.LastName} <img src=${card.IMG} class="imgs"></h1> </div>`));
      DOMSelectors.app.insertAdjacentHTML('beforeend',"The Goat",{filterCards} );
   
      });}
CardFilter()




DOMSelectors.color.addEventListener("click", function(){
   if (document.body.classList.contains("dark")){
      document.body.classList.add("light");
      document.body.classList.remove("dark");
   } else{
         document.body.classList.add("dark");
         document.body.classList.remove("light");}

      });

