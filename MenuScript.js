console.log("Running MenuScript.js")

const menuItems = [
  {name: "Red Velvet Cake", price: 20},
  {name:"Strawberry Ganache Cheesecake", price:22},
  {name:"Cookies and Cream Velvet Cake", price:23},
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
    const userName = document.getElementById("nameField").value;
    const money = Number(document.getElementById("moneyField").value);

    if(order.length == 0){
        document.getElementById("receipt").innerHTML = "Please add a cake before placing your order";
    }

    if(userName == ""){
        document.getElementById("receipt").innerHTML = "Please enter your name."
        return;
    }
    
    if(money < totalPrice){
        document.getElementById("receipt").innerHTML = "Not enough money."
        return;
    }


   let change = money - totalPrice;
   let receiptOrder = "";

   for(let item = 0; item < order.length; item++){
     receiptOrder += order[item].name + " $" + order[item].price + "<br>";
    }

   document.getElementById("receipt").innerHTML = 
   "<h2>Receipt</h2>" + "<p>Name: " + userName + "</p>" + "<p>" + receiptOrder + "</p>" + "<p> Total: $" + totalPrice + "</p>" + "<p> Money given: $" + money + "</P>" + "<p>Change: $" + change + "</p>"
   


}

function resetOrder(){
    order = [];
    totalPrice = 0;

    document.getElementById("Order").innerHTML = "";
    document.getElementById("total").innerHTML = "Total: $0";
    document.getElementById("receipt").innerHTML = "";
}
