export default (Angeladrinks) => {
    const tableTag = document.createElement('table');


    const tbodyTag = document.createElement('tbody');
    tableTag.appendChild(tbodyTag);

    const trTag = document.createElement('tr');
    tbodyTag.appendChild(trTag);
   

    const thTag1 = document.createElement('th');
    thTag1.textContent = 'Drinks';
    trTag.appendChild(thTag1);


    const thTag2 = document.createElement('th');
    thTag2.textContent = 'Quantity';
    trTag.appendChild(thTag2);

    const thTag3 = document.createElement('th');
    thTag3.textContent = 'Price';
    trTag.appendChild(thTag3);
    
    const thTag4 = document.createElement('th');
    thTag4.textContent = 'Total';
    trTag.appendChild(thTag4);

    const trTag1 = document.createElement('tr');
    tbodyTag.appendChild(trTag1);


    const tdTag = document.createElement('td');
    tdTag.textContent = getById(0, Angeladrinks);
    trTag1.appendChild(tdTag);

    



    console.log(tableTag);
    // console.log(tbodyTag);
    console.log(trTag);
    return tableTag;














};