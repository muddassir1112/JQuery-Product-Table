"use strict"
var arr = []; //Product Array
$("#update_product").hide(); //Make Update Button Hide by default
$("#success").hide(); //Make Success Notification hide by default
$("#error").hide(); //Make Error Notification hide by default

$(document).ready(function () {
  $("#add_product").click(function () {
    var product_sku = $("#product_sku").val();
    var product_name = $("#product_name").val();
    var product_price = $("#product_price").val();
    var product_quantity = $("#product_quantity").val();

    var obj = {                          //object to store the data
      SKU: product_sku,
      Name: product_name,
      Price: product_price,
      Quantity: product_quantity,
    };
    if                                 //Validation for all the input fields
      (obj.SKU == "" && obj.Name == "" && obj.Price == "" && obj.Quantity == "") {
      $("#error").text("All field are empty.");
      $("#error").show();
    } else if (obj.SKU == "") {
      $("#error").text("SKU field is empty.");
      $("#error").show();
    } else if (obj.Name == "") {
      $("#error").text("Name field is empty.");
      $("#error").show();
    } else if (obj.Price == "") {
      $("#error").text("Price field is empty.");
      $("#error").show();
    } else if (obj.Quantity == "") {
      $("#error").text("Quantity field is empty.");
      $("#error").show();
    } else if (isNaN(obj.SKU)) {
      $("#error").text("SKU field must have an integer value");
      $("#error").show();
    } else if (!isNaN(obj.Name)) {
      $("#error").text("Name field should be string");
      $("#error").show();
    } else if (isNaN(obj.Price)) {
      $("#error").text("Price field should be integer");
      $("#error").show();
    } else if (isNaN(obj.Quantity)) {
      $("#error").text("Quantity field should be integer");
      $("#error").show();
    } else {
      arr.push(obj);
      display();
    }
  });
});
function display() {
  $("#success").show(); //When the data is push into the array successfully Success notification become visible
  $("#error").hide();
  var table =
    "<table><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
  arr.forEach((element) => {
    table +=
      '<tr id="row"><td>' +
      element.SKU +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Price +
      "</td><td>" +
      element.Quantity +
      '</td><td><a href="#" onclick="edit(\'' +
      element.SKU +
      '\')">Edit</a> <a href="#" onclick="delProd(\'' +
      element.SKU +
      "')\">Delete</a></td></tr>";
  });
  table += "</table>";
  $("#product_list").html(table);
}
function edit(val) {    //Function to edit the entere values
  $("#add_product").hide(); // Add product button will get hide
  $("#update_product").show();//Now update button will be visible

  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i].SKU) {
      $("#product_sku").val(arr[i].SKU);
      $("#product_name").val(arr[i].Name);
      $("#product_price").val(arr[i].Price);
      $("#product_quantity").val(arr[i].Quantity);
      arr.splice(i, 1);
    }
  }
  display();
}
function update() {    //Update function to update the data in the fields
  $("#update_product").hide();
  $("#add_product").show();

  var product_sku = $("#product_sku").val();
  var product_name = $("#product_name").val();
  var product_price = $("#product_price").val();
  var product_quantity = $("#product_quantity").val();
  var obj = {
    SKU: product_sku,
    Name: product_name,
    Price: product_price,
    Quantity: product_quantity,
  };

  if (obj.SKU == "" && obj.Name == "" && obj.Price == "" && obj.Quantity == ""){
  $("#error").text("All field are empty.");
  $("#error").show();
} else if (obj.SKU == "") {
  $("#error").text("SKU field is empty.");
  $("#error").show();
} else if (obj.Name == "") {
  $("#error").text("Name field is empty.");
  $("#error").show();
} else if (obj.Price == "") {
  $("#error").text("Price field is empty.");
  $("#error").show();
} else if (obj.Quantity == "") {
  $("#error").text("Quantity field is empty.");
  $("#error").show();
} else if (isNaN(obj.SKU)) {
  $("#error").text("SKU field must have an integer value");
  $("#error").show();
} else if (!isNaN(obj.Name)) {
  $("#error").text("Name field should be string");
  $("#error").show();
} else if (isNaN(obj.Price)) {
  $("#error").text("Price field should be integer");
  $("#error").show();
} else if (isNaN(obj.Quantity)) {
  $("#error").text("Quantity field should be integer");
  $("#error").show();
} else {
  arr.push(obj);
  display();
  } 
}
function delProd(val) {  //Delete function to delete the product from the list
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i].SKU) {
      arr.splice(i, 1);
    }
  }
  display();
}