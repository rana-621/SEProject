
    var mainImg = document.getElementById("minimg");
var smallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    mainImg.src = this.src;
  };
}
    ///////////////////////////////////////////////
    let allproducts=document.querySelector(".pro-container")

    let products=[
        {
        "id": 1,
        "name": "Cartoon Astronaut T-Shirt",
        "description": "Adidas cartoon astronaut t-shirt",
        "price": 78,
        "imageUrl": "products/f1.jpg"
        },
        {
        "id": 2,
        "name": "Another Product",
        "description": "Description of another product",
        "price": 50,
        "imageUrl": "products/f2.jpg"
        },
        {
            "id": 3,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/f3.jpg"
        },
        {
            "id": 4,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/f4.jpg"
        },
        {
            "id": 5,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/f5.jpg"
        },
        {
            "id": 6,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/f6.jpg"
        },
        {
            "id": 7,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/f7.jpg"
        },
        {
            "id": 8,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/f8.jpg"
        },
        {
            "id": 9,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n1.jpg"
        },
        {
            "id": 10,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n2.jpg"
        },
        {
            "id": 11,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n3.jpg"
        },
        {
            "id": 12,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n4.jpg"
        },
        {
            "id": 13,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n5.jpg"
        },
        {
            "id": 14,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n6.jpg"
        },
        {
            "id": 15,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n7.jpg"
        },
        {
            "id":16,
            "name": "Another Product",
            "description": "Description of another product",
            "price": 50,
            "imageUrl": "products/n8.jpg"
        },
        
    ]
    function drawItems(){
        let y=products.map((item)=>{
            return `
            <div class="pro" onclick="window.location.href='sproduct.html'" id="pro1">
            <img src="${item.imageUrl}" />
            <div class="description">
            <span>adidas</span>
            <h5>cartoon astronaut t-shirts</h5>
            <div class="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <h4>$78</h4>
            </div>
            <a href="#"><i class="fa-solid fa-cart-shopping "></i></a>
        </div>
            `
        })
        allproducts.innerHTML=y;
    }
    drawItems()



