var mysql = require("mysql");
require('console.table');
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) throw err;
    queryProducts();
});
function queryProducts() {
    connection.query("SELECT item_id,product_name,price FROM products", function (err, res) {
        console.log("item_id , product_name, price")

        console.table(res);
        question();
    });

}

//prompt users with two messages.
function question() {
    connection.query("SELECT * FROM products", function (err, res) {
        inquirer
            .prompt([
                // Here we create a basic text prompt.
                {
                    type: "input",
                    message: "What is the id of the product you would like to buy?",
                    name: "productId"
                },
                {
                    type: "input",
                    message: "How many units of the product you would like to buy?",
                    name: "quantity"
                },
            ])

            .then(function (answer) {
                

                var productChosen;
                for (i = 0; i < res.length; i++) {
                    if (answer.productId == res[i].item_id) {
                        productChosen = res[i]
                    }
                    
                }
                
                var quantityLeft = productChosen.stock_quantity - answer.quantity
                if (quantityLeft >= 0) {
                    connection.query(
                        "update products set ? where ?",
                        [
                            {
                                stock_quantity: quantityLeft
                            },
                            {
                                item_id: productChosen.item_id
                            }
                        ],
                        function () {
                            var totalPurchase = productChosen.price * answer.quantity;
                            console.log("Order Placed successfully");
                            console.log("The total price: " + totalPurchase);
                            queryProducts();

                        })


            }
                else {
                    console.log("Insufficient Quantity: try again or contact bamazon manager!")
                    queryProducts();
                 }

            })
    })

}