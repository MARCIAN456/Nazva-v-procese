let products_list = document.querySelector('.all-cards')


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
        <p>${this.title}</p>
        <p>${this.price}</p>
        </div>
        <button class="heart-btn">
            <img src="img/heart (1).png" alt="">
        </button>
        </div>
        <div class="btn">В корзину</div>
    </div>`     
    }
};

products = [
    new Product("Худі Трешер", "20000 UAH" , "image 10.png"),
    new Product("Худі Трешер", "10000 UAH" , "image 11.png"),
    new Product("Худі Трешер", "20000 UAH", "image 12.png"),
    new Product("Худі Трешер", "20000 UAH", "image 13.png"),
    new Product("Худі Трешер", "20000 UAH", "image 12.png"),
]


products.forEach(product => {
    products_list.innerHTML += product.get_card()
});




