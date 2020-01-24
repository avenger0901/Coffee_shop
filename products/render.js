import { findById } from '../findID_calc_functions/utils.js';

export default function render(drink){
    console.log('hahahhaha');
    const drinksElement = document.createElement('li');
    drinksElement.className = 'drink-container';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    drinksElement.appendChild(imageContainer);
    

    const imgTag = document.createElement('img');
    imgTag.src = drink.image;
    imgTag.alt = drink.name + ' image';
    imageContainer.appendChild(imgTag);
  
    const h3Tag = document.createElement('h3');
    imageContainer.appendChild(h3Tag);
    h3Tag.textContent = drink.name;

    const buttonCDiv = document.createElement('div');
    buttonCDiv.className = 'button-container';
    drinksElement.appendChild(buttonCDiv);

    const priceTag = document.createElement('span');
    priceTag.textContent = 'Price';
    buttonCDiv.appendChild(priceTag);


    const h5Tag = document.createElement('h5');
    h5Tag.textContent = drink.price;
    buttonCDiv.appendChild(h5Tag);

    const buttonTag = document.createElement('button');
    buttonTag.textContent = 'Add';
    buttonTag.value = drink.id;
    buttonCDiv.appendChild(buttonTag);

    buttonCDiv.addEventListener('click', () => {
        let currentCartStorage = localStorage.getItem('CART');
        let cart;
        if (currentCartStorage){
            cart = JSON.parse(currentCartStorage);
        } 
        else {
            cart = [];
        }
        let lineItem = findById(drink.id, cart);

        if (!lineItem){
            lineItem = {
                id: drink.id,
                quantity:1
            }; 
            cart.push(lineItem);
        } 
        else {
            lineItem.quantity++;
        }

        currentCartStorage = JSON.stringify(cart);
        localStorage.setItem('CART', currentCartStorage);
      
    });
    
    return drinksElement;

}