import '../styles/style.css ';

const DOMSelectors = {
   color: document.querySelector('#color')
}



DOMSelectors.color.addEventListener("click", function(){
   if (document.body.classList.contains("dark")){
      document.body.classList.add("light");
      document.body.classList.remove("dark");
   } else{
         document.body.classList.add("dark");
         document.body.classList.remove("light");}

      });
//const card = document.getElementById("card").innerHTML=card;
//const filterplayers = card.filter((card)=> card.length > 4);
//function greaterthanfour(){
 //   filterplayers.foreach(card => card.length < 4 === card.style.display === "none");
//}
