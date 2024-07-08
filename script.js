
// quantity --- incease OR decrease---------------

function update_amounts() {
    var sum = 0.0;
    $('#my-Table > tbody > tr').each(function() {
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty * price);
        sum += parseFloat(amount);
        $(this).find('.amount').text('$' + parseFloat(amount).toFixed(2));  // Ensure display updates correctly
    });
    $('.total').text('$' + sum.toFixed(2));  // Update total amount
}

$('.cart-qty-plus').on('click', function() {
    var $qty = $(this).parent(".button-container").find(".qty");
    $qty.val(Number($qty.val()) + 1);
    update_amounts();  // Recalculate amounts after increment
});

$('.cart-qty-minus').on('click', function() {
    var $qty = $(this).parent(".button-container").find(".qty");
    var QtyVal = Number($qty.val());
    if (QtyVal > 0) {
        $qty.val(QtyVal - 1);
    }
    update_amounts();  // Recalculate amounts after decrement
});



// shopping cart
$(document).ready(function() {
    $('.cart-qty-plus, .cart-qty-minus').off().on('click', function() {
        var isIncrement = $(this).hasClass('cart-qty-plus');
        var $qty = $(this).parent(".button-container").find(".qty");
        var currentQty = parseInt($qty.val(), 10);
        $qty.val(isIncrement ? currentQty + 1 : (currentQty > 0 ? currentQty - 1 : 0));
        update_amounts();
    });
});
