const waffle = document.getElementById("waffle");
const creme = document.getElementById("cremeBrulee");

const addToCart = document.getElementById("add-to-cart");
let total = 0;


const productPrice = {
    waffle: 6.50,
    creme: 7.00,
    macaron: 8.00,
    tiramisu: 5.50,
    baklava: 4.00,
    pie: 5.00,
    cake: 4.50, 
    brownie: 4.50,
    panna: 6.50
}


// function add() {
//     let adding = document.createElement("BUTTON");
//     let aha = document.createTextNode("click me");
//     adding.appendChild(aha);
//     document.body.appendChild(adding);
// }

// add();





function addPrices() {
  
  

    
}


for(let item of productPrice) {
    total += productPrice.baklava * productPrice.value;
}
 
console.log("total cart" , total);