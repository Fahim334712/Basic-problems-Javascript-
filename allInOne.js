function perfectFriend(name) {
    if (typeof (name) == 'number') {
        return 'Error!Give me a string Array';
    }
    else if (typeof (name) == 'boolean') {
        return 'Error!Give me a string Array';
    }
    else {
        for (let i = 0; i < name.length; i++) {
            if (name[i].length == 5) {
                return name[i];
            }
        }
    }
}
var friendsName = perfectFriend(['raha', 'taha', 'rohi', 'hasan', 'rohim']);
console.log(friendsName);
function seerToMon(seer) {
    if (typeof (seer) != 'number') {
        return 'Error!,please give me a number';
    }
    else {
        let resultInMon = seer / 40;
        return resultInMon;
    }
}
const TheFinalResult = seerToMon(120);
console.log(TheFinalResult);
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
function deliveryCost(number) {
    const first100Shirt = 100;
    const second100Shirt = 80;
    const moreThan200Shirt = 50;
    if (typeof (number) == 'string') {
        return 'Error!please give me number';
    }
    else if (number <= 100) {
        const first100ShirtDeliveryCost = number * first100Shirt;
        return first100ShirtDeliveryCost;
    }
    else if (number <= 200) {
        const first100 = 100 * first100Shirt;
        const countShirt = number - 100;
        const second100 = countShirt * second100Shirt;
        const totalTaka = first100 + second100;
        return totalTaka;
    }
    else {
        const first100 = 100 * first100Shirt;
        const second100 = 100 * second100Shirt;
        const restShirt = number - 200;
        const RestUnder200 = restShirt * moreThan200Shirt;
        const totaltika = first100 + second100 + RestUnder200;
        return totaltika;
    }
}
const finallyDeliveryFee = deliveryCost(300);
console.log(finallyDeliveryFee);