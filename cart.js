let cart_items = document.querySelector(".cart-items")
let delete_btn = document.querySelectorAll(".delete-button")

cart.items.forEach(function(item){
    cart_items.innerHTML += cart.getItem(item)
});

function deleteItem(event){
    let target_item = event.target.closest(".item-title").innerHTML
    cart.items.forEach(function(item){
        if (item.title == target_item){
            cart.items.splice(cart.items.indexOf(item), 1)
            cart.saveCartToCookies()
        }
    })
}

delete_btn.forEach(function(button){
    button.addEventListener("click", deleteItem)
})