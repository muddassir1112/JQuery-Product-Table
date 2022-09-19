var arr = [];
$(document).ready(function () {
  $("#add_product").click(function () {
    var sku = $("#product_sku").val();
    var name = $("#product_name").val();
    var price = $("#product_price").val();
    var quan = $("#product_quantity").val();
    var data = {
      SKU: sku,
      NAME: name,
      PRICE: price,
      QUANTITY: quan,
    };
    arr.push(data);
    var html; //"<tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action/Delete</tr>";
    arr.forEach((ele) => {
      html +=
        "<tr id='rmvRow'><td>" +
        ele.SKU +
        "</td><td>" +
        ele.NAME +
        "</td><td>" +
        ele.PRICE +
        "</td><td>" +
        ele.QUANTITY +
        "</td><td><a href='#' class='edit'>Edit</a><a href='#' class='delete'>Delete</a></td></tr>;";
    });
    html += "</table>";
    $("table").append(html);
  });
  $('.delete').click(function(){
$('table tr:last-child').remove();
  })
  $('.edit').click(function(){
    $("#product_sku").text(sku);
    $("#product_name").text(name);
    $("#product_price").text(price);
    $("#product_quantity").text(quan);
    $('table tr:last-child').remove();
  })
});
