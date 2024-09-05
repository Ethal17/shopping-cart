  var updateSubTotalPrice = function (ele) {
    var cost = parseFloat($(ele).children('.cost').children(".costSpan").text());
    var quantity = $(ele).children(".quantityRow").children('.quantity').val();  
    var subTotalPrice = cost * quantity;
    var trCount = $('tr');
    if (trCount == undefined) {
      return false;
    }
    $(ele).children('.price').text("$" + subTotalPrice);

    return subTotalPrice;
  }

var sum = function (acc, x) { return Number(acc) + Number(x)};
 
$(document).ready(function () {
    updateTotalPrice();


  //$(".cancel").on('click', function (event) {
    //$(this).closest('tr').remove();
    //updateTotalPrice();
    //});
    $(document).on('click', '.cancel', function (event) {
      $(this).closest('tr').remove();
      updateTotalPrice();
    });
    
    var timeout;
    $(document).on('input', 'tr input', function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        updateTotalPrice();
      }, 500);
    });

  //$('.quantity').on('input', function () {
 //   updateTotalPrice();
  //});


  $('#addProduct').on('submit', function (event) {
    event.preventDefault();
    var name = $(this).children('[name=name]').val();
    var cost = $(this).children('[name=cost]').val();

      $('tbody').append('<tr>' +
    '<td class="name">' + name + '</td>' +
    '<td class="cost">$<span class="costSpan">' + cost + '</td>' +
    '<td class="quantityRow"><b>QTY</b><input class="quantity" type="number" value="1" /><button class="btn btn-light btn-sm cancel" style="border: thin;">Cancel</button></td>' + '<td class="price">20</td>' +
  '</tr>');
  $('tbody tr').each(function (i, ele) {
    updateSubTotalPrice($(ele));
  });
    updateTotalPrice();
    $('.productInput').val("");
  });
  });
  
  var updateTotalPrice = function () {
    var subTotalValues = [];

    $('tbody tr').each(function (i, ele) {
      var subTotal = updateSubTotalPrice(ele);
      subTotalValues.push(subTotal);
    });
  if (subTotalValues.length > 0) {
  var totalPrice = subTotalValues.reduce(sum);
  $('#totalPriceSpan').html(totalPrice);
  }
  else {
    $('#totalPriceSpan').html(0);
  }
  }