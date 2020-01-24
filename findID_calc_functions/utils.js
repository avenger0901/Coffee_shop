export const findById = (someId, someArray) => {
    for (let i = 0 ; i < someArray.length; i++){
        const drink = someArray[i];
        if (drink.id === someId)
            return drink;
    }
};
export const calcLineItem = (quantity, costAmount) => {
    const total = quantity * costAmount;
    return Math.round(total * 100) / 100;
};


export const calcOrderItem = (cartArray, drinksArray) => {
    let orderTotal = 0;
    for (let i = 0; i < cartArray.length; i++) {
        const cartItem = cartArray[i];
        const foundDrinkName = findById(cartItem.id, drinksArray);
        const lineTotal = calcLineItem(cartItem.quantity, foundDrinkName.price);
        orderTotal += lineTotal;    
    }
    
    return orderTotal;
};
