let request = new XMLHttpRequest(); // Create new XML request as variable

// GET the data
request.open('GET', 'http://localhost/cockpit/api/collections/get/seasonal'); 

/* request.open('GET', 'data/seasonal.json');  - didn't work */ 

request.onload = function(){ // Once data is loaded perform this function
    
    let data = JSON.parse(request.responseText); // Parse the text response into JSON and store it in a variable
    
    // Target data = data["entries"][0].itemName = "Book shirt" or the itemName
    
    let dataCount = data["entries"].length // count entries as variable
    let container = document.getElementById("products"); // container box
    
    for(let i = 0; i <= dataCount; i++){
                let entry = data["entries"][i] // refers to the first entry in the JSON
                
                
                container.innerHTML+=
                    `
                    <div class="product-type">
                    <img class = "prod-img" src="../`+entry.itemImage.path+`" alt="">
                    
                    <a class="prod-link" href='buy.html?`+entry.category+`=`+entry._id+`'></a>
                    
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

request.send();