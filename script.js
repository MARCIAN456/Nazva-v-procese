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
    new Product("Худі Трешр", 2000, "image 10.png"),
    new Product("Худі Тршер", 3000, "image 11.png"),
    new Product("Худі Треше", 20000, "image 12.png"),
    new Product("Худі решер", 200000, "image 13.png"),
    new Product("Худі Треер", 20100, "image 12.png"),
    new Product("Худі Тшер", 20030, "image 13.png"),
    new Product("Худі Трер", 23000, "image 12.png"),
    new Product("Худі Треш", 230000, "image 12.png"),
    
]



if (products_list){
    products.forEach(product => {
        products_list.innerHTML += product.get_card()
    });
}
    
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
        document.cookie = `cart=${cartJSON}; max-age=${60}; path=/`;
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
    getItem(item){
        return`<div class="cart-line">
        <img src="/img/image 11.png" alt="">
        <div class="product-info">
            <h3 class="item-title">
                ${item.title}
            </h3>
            <div>
                ${item.price} UAH
            </div>
            <div class="delete-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
            </div>
        </div>
</div>`
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






