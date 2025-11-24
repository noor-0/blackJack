const deck = [
  { name: "A♠", value: 11 }, { name: "2♠", value: 2 }, { name: "3♠", value: 3 }, { name: "4♠", value: 4 }, { name: "5♠", value: 5 }, { name: "6♠", value: 6 },{ name: "7♠", value: 7 }, { name: "8♠", value: 8 }, { name: "9♠", value: 9 },{ name: "10♠", value: 10 }, { name: "J♠", value: 10 }, { name: "Q♠", value: 10 },{ name: "K♠", value: 10 },{ name: "A♥", value: 11 }, { name: "2♥", value: 2 }, { name: "3♥", value: 3 },{ name: "4♥", value: 4 }, { name: "5♥", value: 5 }, { name: "6♥", value: 6 },{ name: "7♥", value: 7 }, { name: "8♥", value: 8 }, { name: "9♥", value: 9 },{ name: "10♥", value: 10 }, { name: "J♥", value: 10 }, { name: "Q♥", value: 10 },{ name: "K♥", value: 10 },{ name: "A♣", value: 11 }, { name: "2♣", value: 2 }, { name: "3♣", value: 3 },{ name: "4♣", value: 4 }, { name: "5♣", value: 5 }, { name: "6♣", value: 6 },{ name: "7♣", value: 7 }, { name: "8♣", value: 8 }, { name: "9♣", value: 9 },{ name: "10♣", value: 10 }, { name: "J♣", value: 10 }, { name: "Q♣", value: 10 },{ name: "K♣", value: 10 },{ name: "A♦", value: 11 }, { name: "2♦", value: 2 }, { name: "3♦", value: 3 },{ name: "4♦", value: 4 }, { name: "5♦", value: 5 }, { name: "6♦", value: 6 },{ name: "7♦", value: 7 }, { name: "8♦", value: 8 }, { name: "9♦", value: 9 },{ name: "10♦", value: 10 }, { name: "J♦", value: 10 }, { name: "Q♦", value: 10 },{ name: "K♦", value: 10 },
];
let playerScore = 0
let dealerScore = 0
let pmoney = 145
let usedCard = new Set();

document.querySelector("#ht").style.display = 'none'
document.querySelector('#std').style.display = 'none'
document.querySelector('#refh').style.display = 'none'

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
    document.querySelector('#money').textContent = 'Per: $' + pmoney
    document.querySelector("#strt").style.display = 'none'
    document.querySelector("#std").style.display = 'block'
    document.querySelector('#ht').style.display = 'block'
    addCardP();
    addCardP();
    addHiddenCard();
    addCardD();
    if(playerScore>22 || dealerScore>22)findWinner();
}
const hed = document.getElementById('heading');
const won = "You Won!";
const lost = "You Lost!";
const tie = "Tie!";
const nomoney = "No Coins!"
function findWinner(){
    flagWon = true
    flagtie = false;
    document.getElementById('hidden-card').style.backgroundColor = 'white';
    if(playerScore > 22){
        flagWon = false;
    }
    else if(dealerScore > 22);
    else if(playerScore == dealerScore){
        flagtie = true;
    }
    else if(playerScore < dealerScore) flagWon = false;
    if(flagtie){
        hed.textContent = tie;
    }
    else if(flagWon){
        hed.textContent = won;
        pmoney += 25;
    }
    else{
        hed.textContent = lost;
        pmoney -= 20;
    }

    document.querySelector('#money').textContent = 'Per: $' + pmoney
    document.getElementById("ht").style.display = 'none';
    document.getElementById('std').style.display = 'none';
    document.getElementById("strt").style.display = 'none';
    document.querySelector("#refh").style.display = 'block'
}
function refresh(){
    usedCard.clear();
    const pd = document.querySelector('.card-div-d');
    const dd = document.querySelector('.card-div-p');
    pd.innerHTML = ''
    dd.innerHTML = ''
    playerScore = 0
    dealerScore = 0
    if(pmoney < 20){
        hed.textContent = nomoney;
        return;
    }
    document.querySelector('#refh').style.display = 'none'
    document.querySelector('#strt').style.display = 'block'
}
