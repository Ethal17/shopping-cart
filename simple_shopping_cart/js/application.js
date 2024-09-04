$(document).ready(function () {

  });

  var updateSubTotalPrice = function (ele) {
    var cost = parseFloat($(ele).children('.cost').text());
    var quantity = $(ele).children(".quantityRow").children('.quantity').val();  
    var subTotalPrice = cost * quantity;
    $(ele).children('.price').text(subTotalPrice);

    return subTotalPrice;
  }

var sum = function (acc, x) { return acc + x};
 
$(document).ready(function () {
    updateTotalPrice();


  $(".cancel").on('click', function (event) {
    $(this).closest('tr').remove();
    });

  $('.quantity').on('input', function () {
    updateTotalPrice();
  });
  });
  
  var updateTotalPrice = function () {
    var subTotalValues = [];

    $('tbody tr').each(function (i, ele) {
      var subTotal = updateSubTotalPrice(ele);
      subTotalValues.push(subTotal);
    });
  
  var totalPrice = subTotalValues.reduce(sum);
  console.log(totalPrice);
  $('#totalPriceSpan').html(totalPrice);
  }