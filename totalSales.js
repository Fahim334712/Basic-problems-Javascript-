function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    if (typeof (shirtQuantity) == 'string' || typeof (pantQuantity) == 'string' || typeof (shoesQuantity) == 'string') {
        return 'Error!please Give Me some numbers';
    }
    else {
        const totalShirtPrice = shirtQuantity * 100;
        const totalPantPrice = pantQuantity * 200;
        const totalShoesPrice = shoesQuantity * 500;
        const totalPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
        return totalPrice;
    }
}
var total = totalSales(4, 3, 2);
console.log(total);