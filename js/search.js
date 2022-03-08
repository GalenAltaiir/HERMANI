                let values = []
                const params = new URLSearchParams(window.location.search)
                for (const param of params) {
                    values.push(param)
                }

                let category = values[0][1]
                let type = values[1][1]

                console.log(category)
                
                const api = "http://localhost/cockpit/api/collections/get/"+category+"Clothing?filter[$and][][category]="+category+"&filter[$and][][type]="+type
                console.log(api)
                // MULTI FILTER EXAMPLE

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
            
            let container = document.getElementById("products");
            let countEntries = entries.length

            let head = document.getElementById("title")
            let capCat = category[0].toUpperCase() + category.substring(1)
            let capType = type[0].toUpperCase() + type.substring(1)
            let title = capCat + "'s Designer " + capType;
            head.innerHTML = title

            
            for(let i = 0; i <= countEntries; i++){
                let entry = entries[i] // refers to the first entry in the JSON
                
                
                container.innerHTML+=
                    `
                    <div class="product-type">
                    <img class = "prod-img" src="`+entry.itemImage.path+`" alt="">
                    
                    <a class="heart" href='#'><i id="heart" class="fa-solid fa-heart"></i></a>
                    
                    <div class="prod-name">
                    `+entry.itemName+ /* data insertion */ `
                    </div>
                    <div class="prod-brand">
                    `+entry.itemBrand+`
                    </div>
                    <div class="prod-price">
                    £`+entry.itemPrice+`
                    </div>
                    
                    </div>
                    `
                    
                }
    }

        getApi();