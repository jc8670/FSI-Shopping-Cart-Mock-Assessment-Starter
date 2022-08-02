let buttonIncrease = document.querySelector('#quantity-up');
let buttonDecrease= document.querySelector('#quantity-down');

let getQty = document.querySelector(".total-quantity");

 let numQty = 1;
 buttonIncrease.addEventListener("click",incrementCart);
 buttonDecrease.addEventListener("click",decrementCart);
 
function incrementCart() {
    numQty++;
getQty.innerHTML = `Quantity: ${numQty}`;
}

function decrementCart() {
    if (numQty===0) return 0;
    numQty--;
getQty.innerHTML = `Quantity: ${numQty}`;

}