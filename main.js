// Holds all cards
let cardsArray = [];

let addCard = (title, cost, effect, type) => {
    cardsArray.push({title: title, cost: cost, effect: effect, type: type})
}

let addCards = () => {
    // input parameters
    let title = document.querySelector('#card-title');
    let cost = document.querySelector('#card-cost');
    let effect = document.querySelector('#card-effect');
    let type = document.querySelector('#card-type');
    let quantity = document.querySelector('#card-quantity');
    
    for (let i = 0; i < parseInt(quantity.value); i++){
        addCard(title.value, cost.value, effect.value, type.value);
    }
}

let generateDeck = (array) => {
    // Clear previoiusly generated deck
    document.querySelector('#deck').innerHTML = '';

    // Create new page
    let page =  document.createElement('div');
    page.classList.add('page');
    
    // Iterate over cardsArray
    array.forEach((element, index) => {

        // New page after every 9 cards and last card
        if ( index !== 0 && (index % 9 === 0 || index === array.length - 1) ) {
            let clonePage = page.cloneNode(true);
            document.querySelector('#deck').appendChild(clonePage);
            page.innerHTML ='';
        }
        // Append card to page
        page.appendChild(generateCard(element.title, element.cost, element.value, element.type));
    });
    
}

let generateCard = (title, cost, effect, type) => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="header">
        <div class="title">${title}</div>
        <div class="cost">${cost}</div>
        <div class="delete" onclick="deleteThis(this)">X</div>
    </div>
    <div class="body">
        <div class="effect">${effect}</div>
    </div>
    <div class="footer">
        ${type}
    </div>
    `;
    return card;
}

let addButtonPressed = () => {
    addCards();
    generateDeck(cardsArray);
}

let deleteThis = (el) => {
    console.log(el.parentNode.parentNode);
    let page = el.parentNode.parentNode.parentNode;
    page.removeChild(el.parentNode.parentNode);
}