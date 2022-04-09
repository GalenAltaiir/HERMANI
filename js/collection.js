$(document).ready(function(){
    $.ajax({url: "../data/seasonal.json", success: function(result){
        let count = result.entries.length
        for (let i = 0; i < count; i++) {
            $("#products").append(`
            <div class="product-type">
            <img class = "prod-img" src="../`+result.entries[i].itemImage.path+`" alt="">
            
            <a class="prod-link" href='../seasonal.html?category=seasonal&id=`+result.entries[i]._id+`'></a>
            
            <a class="heart" href='#'><i id="heart" class="fa-solid fa-heart"></i></a>
            
            <div class="prod-name">
            `+result.entries[i].itemName+ /* data insertion */ `
            </div>
            <div class="prod-brand">
            `+result.entries[i].itemBrand+`
            </div>
            <div class="prod-price">
            £`+result.entries[i].itemPrice+`
            </div>
            
            </div>
            `);
        }
    }});
});