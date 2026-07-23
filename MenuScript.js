/****************************
MenuScript.js
****************************/
console.log("Running MenuScript.js")


/****************************
Variables
****************************/
//Menu Items
const menuItems = [
  {name: "Red Velvet Cake", price: 20},
  {name:"Strawberry Ganache Cheesecake", price:22},
  {name:"Cookies and Cream Velvet Cake", price:23},
  {name:"Dessert Cup", price:10},
  {name:"Strawberry Shortcake", price:20},
  {name:"White Velvet Bliss Cake", price:26}
];


//variabl:stores the order
let order = [];
//Variable:stores the total price
let totalPrice = 0;


/****************************
Functions
****************************/
//Adds the cake to customer order
function addOrder(cakeName, cakePrice){
    let cake = {name:cakeName, price:cakePrice};
    order.push(cake);
    totalPrice = totalPrice + cake.price;
    document.getElementById("Order").innerHTML += "<p>" + cake.name + " $" + cake.price + "</p>";
    document.getElementById("total").innerHTML = "<hr>"+"<h3>TOTAL: $" + totalPrice + "</h3>";
}

//Places the customer order and shows the receipt
function placeOrder(){
    // Gets customer name and money from input
    const userName = document.getElementById("nameField").value;
    const money = Number(document.getElementById("moneyField").value);

    //Checks if the customer hasn't ordered anything
    if(order.length == 0){
        document.getElementById("receipt").innerHTML = "Please add a cake before placing your order";

        //stops the function from keep on continuing with the code
        return;
    }

    //Checks if the customer hasn't input their name
    if(userName == ""){
        document.getElementById("receipt").innerHTML = "Please enter your name."
        return;
    }

    if(money == ""){
        document.getElementById("receipt").innerHTML = "Please enter your Money."
        return;
    }
    
    //checks if the customer put enough money
    if(money < totalPrice){
        document.getElementById("receipt").innerHTML = "Not enough money."
        return;
    }


   let change = money - totalPrice;
   let receiptOrder = "";

   // loops through all of the cake the customer orders
   for(let item = 0; item < order.length; item++){
     receiptOrder += order[item].name + " $" + order[item].price + "<br>";
    }
 
    // Shows the receipt
   document.getElementById("receipt").innerHTML = 
   "<h3>RECEIPT</h3>"+"<hr>"+"<p>Name: " + userName + "</p>"+ "<p>" + receiptOrder + "</p>" + "<hr>" + "<h3> TOTAL: $" + totalPrice + "</h3>" + "<p> Money given: $" + money + "</P>" + "<p>Change: $" + change + "</p>";

}

//resets the order
function resetOrder(){
    order = [];
    totalPrice = 0;

    document.getElementById("Order").innerHTML = "";
    document.getElementById("total").innerHTML = "Total: $0";
    document.getElementById("receipt").innerHTML = "";
}
