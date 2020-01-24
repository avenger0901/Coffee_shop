import { calcLineItem, calcOrderItem } from '../findID_calc_functions/utils.js';
export default function renderlineitem(Angeladrinks, cartItem) {
   
    const trTag = document.createElement('tr');

    const tdTagName = document.createElement('td');
    tdTagName.textContent = Angeladrinks.name;
    trTag.appendChild(tdTagName);

    const tdTagQuantity = document.createElement('td');
    tdTagQuantity.textContent = cartItem.quantity;
    trTag.appendChild(tdTagQuantity);

    const tdTagPrice = document.createElement('td');
    tdTagPrice.textContent = Angeladrinks.price;
    trTag.appendChild(tdTagPrice);


    const tdTagTotal = document.createElement('td');
    tdTagTotal.textContent = Number(calcLineItem(cartItem.quantity, Angeladrinks.price));
   
    trTag.appendChild(tdTagTotal);

    



   
    return trTag;














}