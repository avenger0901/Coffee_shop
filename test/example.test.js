// IMPORT MODULES under test here:
// import example from '../src/example.js';
import '../data/cart.js';
import { cart } from '../data/cart.js';
import { findById, calcLineItem } from '../findID_calc_functions/utils.js';
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
