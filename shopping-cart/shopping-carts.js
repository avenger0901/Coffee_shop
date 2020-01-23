import shopping_render from './shopping-render.js';
import cartData from '../data/cart.js';
import drinksData from '../data/coffee.js';
import { findById, calcOrderItem } from '../findID_calc_functions/utils.js';
import renderlineitem from './shopping-render.js';

const tBodyTag = document.querySelector('tbody');
const totalCost = document.getElementById('total-cost');


for (let i = 0; i < cartData.length; i++){
    const item = cartData[i];
    const drinkItem = findById(item.id, drinksData);
    const feeder = renderlineitem(drinkItem, item);
    tBodyTag.appendChild(feeder);

        

}
const orderTotal = calcOrderItem(cartData, drinksData);
totalCost.textContent = orderTotal;


console.log(cartData);



// This function takes both a cart line item, and the corresponding product, and returns dom that matches your static html example:

// Copy html from the page
// You will need to remove extraneous whitespace. Don't worry, you can adjust the test as need
// Copy the cart line item data for the one that corresponds to the example, and either copy the product or use your findById function to locate the product and use as your input to your function
// Using the DOM API, create your static example programmatically using JavaScript. Start by creating the top level element (<tr> for the line item)
