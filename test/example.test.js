// IMPORT MODULES under test here:
// import example from '../src/example.js';
import '../data/cart.js';
import { cart } from '../data/cart.js';
import { findById } from '../findID_calc_functions/utils.js';
const test = QUnit.test;

test('time to test a function', function(assert) { const someId = 'latte';
    const expected = cart[0];
    
    const result = findById(someId, cart);
    assert.equal(result, expected);
});


// test('test numbers are identical', assert => {
//     const Uguess = 5;
//     const expected = 0;
    
//     const result = compareNum(Uguess, 5);
    
//     assert.equal(result, expected);
// });
