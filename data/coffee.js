const latte = {
    id:'latte',
    name: 'Coffee latte',
    type: 'coffee',
    image: '../assets/latte.png',
    folavor: 'smoothie and creamy',
    price: 3.5,
    cost: 1.5,
};
const cappuccino = {
    id:'cappuccino',
    name: 'Coffee cappuccino',
    type: 'coffee',
    folavor: 'foamy and bitter',
    price: 3.75,
    cost: 1.35,

};
const frappuccino = {
    id: 'frappuccino',
    name: 'Frappuccino',
    type: 'coffee',
    folavor: 'sweet and creamy',
    price: 4.75,
    cost: 2.15,

};
const dripCoffee = {
    id:'dripCoffee',
    name: 'Regular Coffee',
    type: 'coffee',
    folavor: 'fresh and bitter',
    price: 2.75,
    cost: 0.85,

};
const decafCoffee = {
    id:'decafCoffee',
    name: 'Decaf Coffee',
    type: 'decaf coffee',
    folavor: 'chocolaty and bitter',
    price: 2.75,
    cost: 0.85,

};
const greenTea = {
    id:'greenTea',
    name: 'Green Tea',
    type: 'tea',
    folavor: 'fresh',
    price: 2.75,
    cost: 0.95,

};
const blackTea = {
    id:'blackTea',
    name: 'Black TEa',
    type: 'tea',
    folavor: 'earlgray',
    price: 2.75,
    cost: 0.95,

};
const drinks = [
    latte,
    cappuccino,
    frappuccino,
    dripCoffee,
    decafCoffee,
    greenTea,
    blackTea

];
export default drinks;


