console.log("Running MenuScript.js")

const menuItems = [
  {name: "Red Velvet Cake", price: 20},
  {name:"Strawberry Ganache Cheesecake", price:22},
  {name:"Cookies and Cream Red velvet Cake", price:23},
  {name:"Dessert Cup", price:10},
  {name:"Strawberry Shortcake", price:20},
  {name:"White Velvet Bliss Cake"}
];

let order = [];
let totalPrice = 0;

function addOrder(cake){
    order.push(cake);
    totalPrice = totalPrice + cake.price;
}