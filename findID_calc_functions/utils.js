export const findById = (someId, someArray) => {
    for (let i = 0 ; i < someArray.length; i++){
        const dish = someArray[i];
        if (dish.id === someId)
            return dish;
    }
};
export const calcLineItem = (quantity, costAmount) => {
    const total = quantity * costAmount;
    return Math.round(total * 100) / 100;
};

// TDD test in /test/utils.js for a function that lives in /common/utils.js called calcLineItem. This function takes quantity and an amount and returns the total. Due to how JavaScript uses floating point numbers, you may need to round the result to two decimal places using: Math.round(amount * 100) / 100