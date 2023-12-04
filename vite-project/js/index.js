import '../styles/style.css';
import {cards} from './main.js';
const DOMSelectors = {
   color: document.querySelector('#color'),
   Thing: document.getElementById("Card")
}
 // function populate(arr){
cards.forEach(()=> {
const card2 = (` <div id = "Card"> 
<h1> ${cards.FirstName} </h1>
<h2> ${cards.LastName} </h2> </div>`)
DOMSelectors.Thing.insertAdjacentHTML('afterend', card2);
})
//}


/* function filter(){
   let button = document.querySelectorAll("#btn")
   button.forEach((btn)=> btn.addEventListener("click", function(){
      let category = btn.textContent.APG > 8()
      let newArr = items.filter((cards)=> cards.type.includes(category))
      document.querySelector(".parent").innerHTML = ""
      populate(newArr)
   }))} */

filter()
DOMSelectors.color.addEventListener("click", function(){
   if (document.body.classList.contains("dark")){
      document.body.classList.add("light");
      document.body.classList.remove("dark");
   } else{
         document.body.classList.add("dark");
         document.body.classList.remove("light");}

      });

