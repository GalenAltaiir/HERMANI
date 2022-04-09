async function insertMenu(){
    let menu = document.getElementById("menu")
    let nav = document.getElementById("nav")
    let foot = document.getElementById("footnav")
    menu.innerHTML+=
                // http://localhost/cockpit/api/collections/get/MenClothing?filter[$and][][category]=Men&filter[$and][][type]=Bag
                    `
                <a id="close" onclick="menu()">X</a>
                <a href="../index.html">HOMEPAGE <i class="fa-solid fa-angle-right"></i></a>
                <a href="categories/collection.html?category=collection">SPRING 2022 <i class="fa-solid fa-angle-right"></i></a>
                
                <a href="../categories/women.html?category=women">WOMEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="../categories/men.html?category=men">MEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="../categories/kids.html?category=kids">KIDS <i class="fa-solid fa-angle-right"></i></a>
                <a href="../login.html">LOGIN<i class="fa-solid fa-angle-right"></i></a>
                    `

    nav.innerHTML+=
    `
        <a href="../basket.html"><i id="cart" class="fa-solid fa-bag-shopping"></i></a>
        <a href="#"><i id="heart" class="fa-solid fa-heart"></i></a>
        <a onclick="menu()"><i class="fa-solid fa-bars"></i></a>
    `
    foot.innerHTML+=
    `
            <div class="top-nav">
                <a href="../index.html">HOMEPAGE</a> |
                <a href="../categories/women.html?category=women">WOMEN</a> |
                <a href="../categories/men.html?category=men">MEN</a> |
                <a href="../categories/kids.html?category=kids">KIDS</a> |
                <a href="categories/collection.html?category=collectio">SALE</a>
            </div>
            <br>
            <div class="bot-nav">
                <a href="../login.html">LOGIN</a> |
                <a href="../register.html">REGISTER</a>
            </div>
    `
}

function incompatible(){
    alert("Your browser might be incompatible with this website. Please use the latest version of Chrome, Firefox, Opera or Safari.")
}

        function detectBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';//crap
    } else {
        return 'Unknown';
    }
} 

const browser = detectBrowser();
if(browser == "IE" || browser == "Unknown" /* || browser == "Safar"  || browser == "Chrome" */){
    // remove comment above to check for safari or chrome (debug)
    incompatible()
}

insertMenu();
