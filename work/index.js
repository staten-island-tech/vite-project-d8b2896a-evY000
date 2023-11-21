 const card = document.getElementById("card").innerHTML=card;
const filterplayers = card.filter((card)=> card.length > 4);
function greaterthanfour(){
    filterplayers.foreach(card => card.length < 4 === card.style.display === "none");
}

const theme = document.getElementById("theme").innerHTML=theme;
document.querySelector("theme").addEventListener("click", function() {
    if (document.body.classList.contains("themeone")){
        document.body.classList.add("themetwo");
        document.body.classList.remove("themeone");
    }
    else{
        document.body.add("themeone");
        document.body.remove('themetwo');
        
    }
})