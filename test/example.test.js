// IMPORT MODULES under test here:
// import example from '../src/example.js';
import '../data/cart.js';
import { cart } from '../data/cart.js';
import cartData from '../data/cart.js';
import drinksData from '../data/coffee.js';
import { findById, calcLineItem, calcOrderItem } from '../findID_calc_functions/utils.js';
const test = QUnit.test;

test('test if findById function works', function(assert) { 
    const someId = 'latte';
    const expected = cart[0];
    
    const result = findById(someId, cart);
    assert.equal(result, expected);
});


test(' if calcLineItem fuction works', assert => {
    const quantity = 5;
    const expected = 10;
    
    const result = calcLineItem(quantity, 2);
    
    assert.equal(result, expected);
});

test(' if calctotal fuction works', assert => {
    const cartArray = cartData;
    const expected = 46;
    
    const result = calcOrderItem(cartArray, drinksData);
    console.log(result);
    console.log(cartArray);

    assert.equal(result, expected);
});

// TDD test in /test/utils.js for a function that lives in /common/utils.js called calcOrderItem. This function takes the cart array and products array. Calculate the total of your cart data as the expected value.

















































































































