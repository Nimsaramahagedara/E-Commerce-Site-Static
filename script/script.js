const menuBtn = document.getElementById("menuBtn");
const menuItem = document.getElementById("menuItems");
menuBtn.addEventListener("click", menuToggle);
console.log(menuItem);
function menuToggle (){
    if(menuItem.style.height == "0px" || menuItem.style.height == ""){
        menuItem.style.height = "190px";
        
    }else{
        menuItem.style.height = "0px";
    }
}

  