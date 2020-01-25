import drinksData from '../data/coffee.js';
import { findById, calcOrderItem } from '../findID_calc_functions/utils.js';
import renderlineitem from './shopping-render.js';

const tBodyTag = document.querySelector('tbody');
const totalCost = document.getElementById('total-cost');

const currentCartStorage = localStorage.getItem('CART');
let cart;
if (currentCartStorage){
    cart = JSON.parse(currentCartStorage);
} 
else {
    cart = [];
}

for (let i = 0; i < cart.length; i++){
    const item = cart[i];
    const drinkItem = findById(item.id, drinksData);
    const feeder = renderlineitem(drinkItem, item);
    tBodyTag.appendChild(feeder);
}

const orderTotal = calcOrderItem(cart, drinksData);
totalCost.textContent = orderTotal;





