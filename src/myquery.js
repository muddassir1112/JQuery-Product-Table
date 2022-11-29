var prodArr = []; //Product Array
document.getElementById("success").style.display = "none"; //Hide Success Notification
document.getElementById("error").style.display = "none"; //Hide Error Notification

$(document).ready(function () {
  //jQuery Ready Function
  $("#add_product").click(function () {
    var product_sku = $("#product_sku").val();
    var product_name = $("#product_name").val();
    var product_price = $("#product_price").val();
    var product_quantity = $("#product_quantity").val();

    var obj = {
      //Making object for storing all input values
      SKU: product_sku,
      Name: product_name,
      Price: product_price,
      Quantity: product_quantity,
    };
    errorDisplay(obj);
  });

  //function for hide notification
  $("#close-success").click(function () {
    $("#success").hide();
  });
  $("#close-error").click(function () {
    $("#error").hide();
  });
});

//Display function of table
function display() {
  $("#success").show();
  $("#error").hide();
  var table =
    "<table><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
  prodArr.forEach((element) => {
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
  document.getElementById("product_list").innerHTML = table;
}
//Edit function
function edit(val) {
  $("#add_product").prop("value", "UPDATE");
  for (let i = 0; i < prodArr.length; i++) {
    if (val == prodArr[i].SKU) {
      document.getElementById("product_sku").value = prodArr[i].SKU;
      document.getElementById("product_name").value = prodArr[i].Name;
      document.getElementById("product_price").value = prodArr[i].Price;
      document.getElementById("product_quantity").value = prodArr[i].Quantity;
      prodArr.splice(i, 1);
    }
  }
  display();
}

function errorDisplay(obj) {
  if (
    //Implemention the all check requried
    obj.SKU == "" &&
    obj.Name == "" &&
    obj.Price == "" &&
    obj.Quantity == ""
  ) {
    $("#error").text("All field are empty.");
    $("#success").hide();
    $("#error").show();
  } else if (obj.SKU == "") {
    $("#error").text("SKU field is empty.");
    $("#success").hide();
    $("#error").show();
  } else if (obj.Name == "") {
    $("#error").text("Name field is empty.");
    $("#success").hide();
    $("#error").show();
  } else if (obj.Price == "") {
    $("#error").text("Price field is empty.");
    $("#success").hide();
    $("#error").show();
  } else if (obj.Quantity == "") {
    $("#error").text("Quantity field is empty.");
    $("#success").hide();
    $("#error").show();
  } else if (isNaN(obj.SKU)) {
    $("#error").text("SKU field should be integer");
    $("#success").hide();
    $("#error").show();
  } else if (!isNaN(obj.Name)) {
    $("#error").text("Name field should be string");
    $("#success").hide();
    $("#error").show();
  } else if (isNaN(obj.Price)) {
    $("#error").text("Price field should be integer");
    $("#success").hide();
    $("#error").show();
  } else if (isNaN(obj.Quantity)) {
    $("#error").text("Quantity field should be integer");
    $("#success").hide();
    $("#error").show();
  } else {
    $("#add_product").prop("value", "ADD PRODUCT");
    prodArr.push(obj);
    console.log(prodArr);
    display();
  }
}

//Function for delete the item
function delProd(val) {
  for (let i = 0; i < prodArr.length; i++) {
    if (val == prodArr[i].SKU) {
      prodArr.splice(i, 1);
    }
  }
  display();
}

