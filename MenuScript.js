console.log("Running MenuScript.js")

const menuItems = [
  {name: "Red Velvet Cake", price: 20},
  {name:"Strawberry Ganache Cheesecake", price:22},
  {name:"Cookies and Cream Red velvet Cake", price:23},
  {name:"Dessert Cup", price:10},
  {name:"Strawberry Shortcake", price:20},
  {name:"White Velvet Bliss Cake", price:26}
];

let order = [];
let totalPrice = 0;

function addOrder(cakeName, cakePrice){
    let cake = {name:cakeName, price:cakePrice};
    order.push(cake);
    totalPrice = totalPrice + cake.price;
    document.getElementById("Order").innerHTML += "<p>" + cake.name + " $" + cake.price + "</p>";
    document.getElementById("total").innerHTML = "Total: $" + totalPrice;
}

function placeOrder(){
    const userName = document.getElementById(nameField).value;
    
}