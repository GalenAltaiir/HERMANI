
function menu(){
    document.getElementById("menu").classList.toggle("slideOut");
    document.getElementById("overlay").classList.toggle("dark");
}

window.addEventListener("scroll", () => {
    var nav = document.getElementById("topNav")
    if(window.pageYOffset >= 160){

        nav.style.top = "0";
        
    } else {
        
        nav.style.top = "-60px";

    }
})