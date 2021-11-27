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