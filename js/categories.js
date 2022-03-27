
                // Get url parameters and store them in an array
                let values = []
                const params = new URLSearchParams(window.location.search)
                for (const param of params) {
                    values.push(param)
                }
                
                const api = "http://localhost/cockpit/api/collections/get/"+values[0][1]+"Categories"
                console.log(api);
                
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
            */
            const response = await fetch(api)
            const data = await response.json()
            const {entries} = data
            
            let container = document.getElementById("men-subcat");
            let countEntries = entries.length
            
            for(let i = 0; i <= countEntries; i++){
                let entry = entries[i] // refers to the first entry in the JSON
                // delete above 1 line
                let type = entries[i].type.toUpperCase();
                let url = entries[i].type.toLowerCase();
                let img = entries[i].img.path
                container.innerHTML+=
                // http://localhost/cockpit/api/collections/get/MenClothing?filter[$and][][category]=Men&filter[$and][][type]=Bag
                    `
                        <div class="product-type">
                        <a class="prod-name" href=../search.html?category=`+values[0][1]+`&type=`+url+`>`+type+`</a>
                        <img src="../`+img+`" alt="">
                        </div>
                    `
                    
                }
    }

        getApi();