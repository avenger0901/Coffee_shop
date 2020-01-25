import { findById } from '../findID_calc_functions/utils.js';

const makeCart = () => {
    
    let possibleCart = localStorage.getItem('CART');
    if (possibleCart){
        return JSON.parse(possibleCart);
    } else {
        return [];
    }
};

export default function render(drink){
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
    priceTag.textContent = 'Price:';
    buttonCDiv.appendChild(priceTag);


    const h5Tag = document.createElement('h5');
    h5Tag.textContent = drink.price;
    buttonCDiv.appendChild(h5Tag);


    buttonCDiv.addEventListener('click', () => {
        const cart = makeCart();

        let drinksAlreadyInCart = findById(drink.id, cart);

        if (!drinksAlreadyInCart){
            drinksAlreadyInCart = {
                id: drink.id,
                quantity:1
            }; 
            cart.push(drinksAlreadyInCart);
        } 
        else {
            drinksAlreadyInCart.quantity++;
        }

        const currentCartStage = JSON.stringify(cart);
        localStorage.setItem('CART', currentCartStage);
      
    });
    
    return drinksElement;

}