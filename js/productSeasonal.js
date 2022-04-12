                let values = []
                const params = new URLSearchParams(window.location.search)
                for (const param of params) {
                    values.push(param)
                }

                let category = values[0][1]
                let prodID = values[1][1]
                const api = "http://hermani.atwebpages.com/api/collections/get/"+category+"?filter[_id]="+prodID
                let currentImg = document.getElementById("display-img");

    async function getApi(){
            const response = await fetch(api)
            const data = await response.json()
            const {entries} = data
            let entry = entries[0]

            let name = document.getElementById("title")
            let brand = document.getElementById("brand")
            let price = document.getElementById("price")
            let gallery = entry.itemGallery;

            
            // Display all gallery items
            for(let i = 0; i <= entry.itemGallery.length - 1; i++){
                document.getElementsByClassName("gallery-img")[i].setAttribute("src", gallery[i].path)
            }
            name.innerHTML = entry.itemName
            brand.innerHTML = entry.itemBrand
            price.innerHTML = "£ "+entry.itemPrice
            /*  head.innerHTML = title */
    }
        getApi();