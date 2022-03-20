async function insertMenu(){
    let menu = document.getElementById("menu")

    menu.innerHTML+=
                // http://localhost/cockpit/api/collections/get/MenClothing?filter[$and][][category]=Men&filter[$and][][type]=Bag
                    `
                <a id="close" onclick="menu()">X</a>
                <a href="index.php">HOMEPAGE <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">SPRING 2022 <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">HOME <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">WOMEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="categories.php?for=men">MEN <i class="fa-solid fa-angle-right"></i></a>
                <a href="products.html">KIDS <i class="fa-solid fa-angle-right"></i></a>
                    `
}

insertMenu();
