const Spade = "♠";
const Heart = "♥";
const Diamond = "♦";
const Club = "♣";
const deck = [
  { name: "A♠", value: 11 }, { name: "2♠", value: 2 }, { name: "3♠", value: 3 }, { name: "4♠", value: 4 }, { name: "5♠", value: 5 }, { name: "6♠", value: 6 },{ name: "7♠", value: 7 }, { name: "8♠", value: 8 }, { name: "9♠", value: 9 },{ name: "10♠", value: 10 }, { name: "J♠", value: 10 }, { name: "Q♠", value: 10 },{ name: "K♠", value: 10 },{ name: "A♥", value: 11 }, { name: "2♥", value: 2 }, { name: "3♥", value: 3 },{ name: "4♥", value: 4 }, { name: "5♥", value: 5 }, { name: "6♥", value: 6 },{ name: "7♥", value: 7 }, { name: "8♥", value: 8 }, { name: "9♥", value: 9 },{ name: "10♥", value: 10 }, { name: "J♥", value: 10 }, { name: "Q♥", value: 10 },{ name: "K♥", value: 10 },{ name: "A♣", value: 11 }, { name: "2♣", value: 2 }, { name: "3♣", value: 3 },{ name: "4♣", value: 4 }, { name: "5♣", value: 5 }, { name: "6♣", value: 6 },{ name: "7♣", value: 7 }, { name: "8♣", value: 8 }, { name: "9♣", value: 9 },{ name: "10♣", value: 10 }, { name: "J♣", value: 10 }, { name: "Q♣", value: 10 },{ name: "K♣", value: 10 },{ name: "A♦", value: 11 }, { name: "2♦", value: 2 }, { name: "3♦", value: 3 },{ name: "4♦", value: 4 }, { name: "5♦", value: 5 }, { name: "6♦", value: 6 },{ name: "7♦", value: 7 }, { name: "8♦", value: 8 }, { name: "9♦", value: 9 },{ name: "10♦", value: 10 }, { name: "J♦", value: 10 }, { name: "Q♦", value: 10 },{ name: "K♦", value: 10 },
];
let playerScore = 0
let dealerScore = 0
let usedCard = new Set();

function getCard() {
    let rnd = Math.floor(Math.random() * 52); 
    while (usedCard.has(rnd)) {
        rnd = Math.floor(Math.random() * 52);
    }
    usedCard.add(rnd);
    return deck[rnd];
}
function addCardP(){
    const cardDiv = document.querySelector('.card-div-p');
    const newCard = document.createElement('p');
    newCard.className = 'card';
    cardDiv.appendChild(newCard);
    let card = getCard();
    playerScore += card.value;
    newCard.textContent = card.name;
}
function addCardD(){
    const cardDiv = document.querySelector('.card-div-d');
    const newCard = document.createElement('p');
    newCard.className = 'card';
    cardDiv.appendChild(newCard);
    let card = getCard();
    dealerScore += card.value;
    newCard.textContent = card.name;
}
function addHiddenCard(){
    const cardDiv = document.querySelector('.card-div-d');
    const newCard = document.createElement('p');
    newCard.className = 'card';
    newCard.id = 'hidden-card';
    cardDiv.appendChild(newCard);
    let card = getCard();
    dealerScore += card.value;
    newCard.textContent = card.name;
}
function stand(){
    while(dealerScore < 17){
        addCardD();
    }
    findWinner();
}
function hit(){
    addCardP();
    if(playerScore>22) findWinner();
}
function start(){
    addHiddenCard();
    addCardD();
    addCardP();
    addCardP();
    if(playerScore>22 || dealerScore>22)findWinner();
}
const hed = document.getElementById('heading');
const won = "You Won!";
const lost = "You Lost!";
const tie = "Tie!"
function findWinner(){
    document.getElementById('hidden-card').style.backgroundColor = 'white';
    if(playerScore > 22){
        hed.textContent = lost;
    }
    else if(dealerScore > 22){
        hed.textContent = won;
    }
    else if(playerScore == dealerScore){
        hed.textContent = tie;
    }
    else if(playerScore > dealerScore){
        hed.textContent = won;
    }
    else hed.textContent = lost;
    

    document.getElementById("ht").style.display = 'none';
    document.getElementById('std').style.display = 'none';
    document.getElementById("strt").style.display = 'none';
}
function refresh(){
    window.location.reload();
}
