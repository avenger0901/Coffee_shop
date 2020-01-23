export const findById = (someId, someArray) => {
    for (let i = 0 ; i < someArray.length; i++){
        const dish = someArray[i];
        if (dish.id === someId)
            return dish;
    }
};