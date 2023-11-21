 const card = document.getElementById("card").innerHTML=card;
const filterplayers = card.filter((card)=> card.length > 4);
function greaterthanfour(){
    filterplayers.foreach(card => card.length < 4 === card.style.display === "none");
}

const theme = document.getElementById("theme").innerHTML=theme;