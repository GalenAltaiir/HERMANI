                const api = "http://localhost/cockpit/api/collections/get/MenClothing"
                let urlRaw = window.location.href;
                console.log(urlRaw)
        async function getApi(){
            /*
                Asynchronous function which purpose is to fetch
                the JSON file from the Server (Cockpit CMS) and 
                display it's content dynamically.

                First we set shorthands and set up the fetch for API,
                then run it through a for loop to generate HTML elements
                for each entry.

                All of this is done through JavaScript with the exception
                of the JSON being stored on Cockpit which is a PHP based
                CMS. This means that it can be hosted on a static web host,
                so long the CMS is running elsewhere.

                TO DO:
                - LIMIT ENTRIES PER PAGE (50 maybe)
            */
            const response = await fetch(api)
            const data = await response.json()
            const {entries} = data
            let productName = document.getElementsByClassName("prod-name")
            let productBrand = document.getElementsByClassName("prod-brand")
            let productPrice = document.getElementsByClassName("prod-price")
            let productImg = document.getElementsByClassName("prod-img")
            
            let container = document.getElementById("products");
            let countEntries = entries.length
            
            for(let i = 0; i <= countEntries - 1; i++){
                let entry = entries[i] // refers to the first entry in the JSON
                
                container.innerHTML+=
                `
                <div class="product-type">
                <img class = "prod-img" src="" alt="">
                <a class="heart" href='#'><i id="heart" class="fa-solid fa-heart"></i></a>
                <div class="prod-name"></div><div class="prod-brand">
                </div>
                <div class="prod-price"></div>
                </div>
                `
                
                // the index here refers to the HTML block classes (first being 0)
                productName[i].classList.add("prod-name")
                productName[i].innerHTML += entry.itemName

                // display name and center it
                productBrand[i].innerHTML = entry.itemBrand

                // display brand and center it
                productPrice[i].innerHTML = '£'+entry.itemPrice

                // display price and center it
                productImg[i].src = entry.itemImage.path
                // places product image
        }
    }

        getApi();