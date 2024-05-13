///////////////////////show other products////////////////////////////////
    var mainImg = document.getElementById("minimg");
var smallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    mainImg.src = this.src;
  };
}
    ///////////////////save products in array////////////////////////////
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
        "name": "White T-Shirt",
        "description": "Description of another product",
        "price": 50,
        "imageUrl": "products/f2.jpg"
        },
        {
            "id": 3,
            "name": "blue T-Shirt Product",
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
            <div class="pro"  id="pro1">
            <img src="${item.imageUrl}" onclick="window.location.href='sproduct.html'"/>
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
            <div class="cartb">
            <button  class="add_to_cart" onClick=addToCart(${item.id})> Add To Cart</button>
            </div>
        </div>
            `
        })
        allproducts.innerHTML=y;
    }

    drawItems()
    /////////////////////////////////////////////////////////////////
    let badge=document.querySelector(".badges")
    let cartProductDiv=document.querySelector(".carts_products div")


    //////////////////////////////////////////////////////////////////
    let idcart=document.querySelector("#product1")
    let getidcart=localStorage.getItem("name",idcart.value)
    // let addedItem=[];
    let addedItem=localStorage.getItem("productsincart") ?JSON.parse(localStorage.getItem("productsincart")):[];

    if(addedItem){
        addedItem.map(item=>{
            cartProductDiv.innerHTML+=`<p> ${item.name}</p>`
        })
        badge.style.display="block"
        badge.innerHTML=addedItem.length
        }

         if(localStorage.getItem=("idcart")){
            function addToCart(id) {
                let choosenItem=products.find((item)=>item.id===id)
                cartProductDiv.innerHTML+=`<p> ${choosenItem.name}</p>`;
                addedItem=[...addedItem,choosenItem]
                localStorage.setItem("productsincart", JSON.stringify(addedItem))
                let cartproductlength=document.querySelectorAll(".carts_products div p")
                // console.log(cartproductlength.length)
                badge.style.display="block"
                badge.innerHTML=cartproductlength.length     
            }
         }else{
            window.location="shop.html" 
         }
      
//    ///////////////////////////////////////////////////////////
    let shoppingCartIcon=document.querySelector("#shopping_cart")
    let cartProducts=document.querySelector(".carts_products")
    shoppingCartIcon.addEventListener('click',opencart)

    function opencart(){
        if(cartProductDiv.innerHTML!=""){
            if( cartProducts.style.display=="block"){
                cartProducts.style.display="none"
            }else{
                cartProducts.style.display="block"
            }
        }
    }
    /////////////////////remove from cart////////////////////////////////////////
  
    //   let removedItem=[];
//     function removeFromCart(id) {
//   let temp=removedItem.filter(item=>item.id!=id)
//   localStorage.setItem("productsincart", JSON.stringify(temp))

//     }
//     removeFromCart()

  