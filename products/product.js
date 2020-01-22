import drinksData from '../data/coffee.js';
import render from '../products/render.js';

console.log(render);
const drinkListUl = document.getElementById('drink-lists');

for (let i = 0; i < drinksData.length; i++) {
    const thisDrink = drinksData[i];

    const drinksElement = render(thisDrink);

    console.log(thisDrink);
    console.log(drinksElement);
    drinkListUl.appendChild(drinksElement);
    
}

