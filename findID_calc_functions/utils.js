import cartData from '../data/cart.js';
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
// TDD test in /test/utils.js for a function that lives in /common/utils.js called calcOrderItem. This function takes the cart array and products array. Calculate the total of your cart data as the expected value.

// In the function:

// Create a variable to hold the order total.
// Loop the line items and use the calcLineItem function to calculate each line item and add it to the order total.
// Return the order total
// Note: you may need to round the order total to get your test to pass like you did with the line item total