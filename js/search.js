                let values = []
                const params = new URLSearchParams(window.location.search)
                for (const param of params) {
                    values.push(param)
                }

                let category = values[0][1]
                let type = values[1][1]
                
                const api = "http://localhost/cockpit/api/collections/get/"+category+"Clothing?filter[$and][][category]="+category+"&filter[$and][][type]="+type
                console.log(api)
                // MULTI FILTER EXAMPLE

$(document).ready(function(){
    $.ajax({url: api, success: function(entry){
        let count = entry.entries.length
        for (let i = 0; i < count; i++) {
            $("#products").append(`
                    <div class="product-type">
                    <img class = "prod-img" src="`+entry.entries[i].itemImage.path+`" alt="">
                    
                    <a class="prod-link" href='buy.html?`+entry.entries[i].category+`=`+entry.entries[i]._id+`'></a>
                    
                    <a class="heart" href='#'><i id="heart" class="fa-solid fa-heart"></i></a>
                    
                    <div class="prod-name">
                    `+entry.entries[i].itemName+ /* data insertion */ `
                    </div>
                    <div class="prod-brand">
                    `+entry.entries[i].itemBrand+`
                    </div>
                    <div class="prod-price">
                    £`+entry.entries[i].itemPrice+`
                    </div>
                    
                    </div>
                    `);
        }
    }});
});
