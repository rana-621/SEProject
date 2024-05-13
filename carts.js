

let productsincart=localStorage.getItem("productsincart");

if(productsincart){
    let item=JSON.parse(productsincart);
    drawcartproducts(item);
}

function drawcartproducts(products){
    let allproducts=document.querySelector(".pro-container");  
    let y=products.map((item)=>{
        return `
        <div class="pro"  id="pro1">
        <img src="${item.imageUrl}" onclick="window.location.href='sproduct.html'"/>
        <div class="description">
        <span>adidas</span>
        <h5>cartoon astronaut t-shirts</h5>
        <h4>$78</h4>
        </div>
        <div class="cartb">
        <button  class="add_to_cart" onClick=removefromCart(${item.id})> Remove</button>
        </div>
    </div>
        `;
    });
    allproducts.innerHTML=y;
}

drawcartproducts();






