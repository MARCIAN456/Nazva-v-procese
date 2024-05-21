let products_list = document.querySelector('.all-cards')

function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); 

        if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1); 
        }
    }

    return '';
}

class Product{
    constructor(title, price, image, description="") {
        this.title = title;
        this.price = price;
        this.image = image;
    }
     get_card(){
        return `<div class="cards">
        <img class="image" src="img/${this.image}" alt="вах">
        <div class="text-box">
        <div class="text">
        <p class="card-title">${this.title}</p>
        <p><span class="price">${this.price}</span> UAH</p>
        </div>
        <button class="heart-btn">
            <img src="img/heart (1).png" alt="">
        </button>
        </div>
        <div class="btn buy-btn">В корзину</div>
    </div>`     
    }
};

products = [
    new Product("Худі Трешер", 20000, "image 10.png"),
    new Product("Худі Трешер", 20000, "image 11.png"),
    new Product("Худі Трешер", 20000, "image 12.png"),
    new Product("Худі Трешер", 20000, "image 13.png"),
    new Product("Худі Трешер", 20000, "image 12.png"),
]




products.forEach(product => {
    products_list.innerHTML += product.get_card()
});

let buy_btn = document.querySelectorAll(".buy-btn")

class Cart{
    constructor(){
        this.items = []
        this.total = 0
        this.loadCartFromCookies()
        console.log(this.items)
    }
    addItem(item) {
        this.items.push(item);
        this.saveCartToCookies()
       
    }
    saveCartToCookies() {
        let cartJSON = JSON.stringify(this.items);
        document.cookie = `cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }
    calculateTotalPrice(){
        this.total = 0;
        this.items.forEach(item => {
        this.total += item.price
        });
        return this.total
    } 
    loadCartFromCookies() {
        let cartCookie = getCookieValue('cart');
        if (cartCookie && cartCookie != ''){
            let items = JSON.parse(cartCookie);
            items.forEach(item => {
                this.items.push(item);
            });
        }
    }

}


let cart = new Cart()

function getItem(event){
    let target_card = event.target.closest(".cards")
    let title = target_card.querySelector(".card-title").innerHTML 
    let price = +target_card.querySelector(".price").innerHTML 
    let item = {
        title: title, 
        price: price
    }
    cart.addItem(item)
    
}

buy_btn.forEach(function(button){
    button.addEventListener("click", getItem)
})


