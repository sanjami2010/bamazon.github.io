var mysql = require("mysql");
require('console.table');
var inquirer = require("inquirer");
var prompt = inquirer.createPromptModule();
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
    queryMenuList();
    

});


function queryMenuList() {
    inquirer
        .prompt(
            // Here we create a basic text prompt.
            {
                type: "list",
                name: "doingWhat",
                message: "Management Console: What would you like to do today?",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "Exit Program"]
            },

        ).then(function (res) {
            if (res.doingWhat == "View Products for Sale") {
            console.log("if statement ran")
                viewProducts();
                //console.table(products)
                //viewProducts();
            }
            else if (res.doingWhat == "View Low Inventory") {
                viewLowInventory();
            }
            else if (res.doingWhat == "Add to Inventory") {
                addInventory();
            }
            else if (res.doingWhat == "Add New Product") {
                addNewProduct();
            }
            else ("exit program")


        })




}
function viewProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
           console.table(res);
           queryMenuList();

    })
}


