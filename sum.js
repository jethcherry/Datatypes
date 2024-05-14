const  priceItems = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];


function totalItems(priceItems) {
    let total = 0;
    for (const item of priceItems) {
        total += item.price;
    }
    return total;
}

const sumCost = totalItems(priceItems);
console.log("Total Cost:", sumCost);
