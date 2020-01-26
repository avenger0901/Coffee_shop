import render from './admin-render.js';
import { getDrinks } from '../findID_calc_functions/utils.js';

const drinks = getDrinks();
console.log(drinks);
console.log('==========');
const drinkListUl = document.getElementById('drinks');
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.querySelector('form');

    const data = new FormData(form);
    const inputPrice = Number(data.get('price'));

    const newDrink = {
        name: data.get('name'),
        id: data.get('id'),
        price: '$' + inputPrice.toFixed(2),
        image: data.get('image')
    };
    console.log(newDrink);

    drinks.push(newDrink);

    const stringfyDrinks = JSON.stringify(drinks);

    localStorage.setItem('some_key', stringfyDrinks);

    const newDrinksElements = render(newDrink);
    drinkListUl.appendChild(newDrinksElements);
});

for (let i = 0; i < drinks.length; i++) {
    const thisDrink = drinks[i];
    const previousDrinksElement = render(thisDrink);
    drinkListUl.appendChild(previousDrinksElement);
}

