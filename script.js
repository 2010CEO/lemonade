let money = 0;
let lemons = 0;
let sugar = 0;
let cups = 0;
let lemonadeStandLevel = 1;
let producerLevel = 1;

const prices = {
  lemon: 1,
  sugar: 1,
  cup: 1,
  lemonade: 2
};

const moneyElement = document.getElementById('money');
const lemonsElement = document.getElementById('lemons');
const sugarElement = document.getElementById('sugar');
const cupsElement = document.getElementById('cups');

document.getElementById('makeLemonade').addEventListener('click', makeLemonade);
document.getElementById('sellLemonade').addEventListener('click', sellLemonade);
document.getElementById('buyLemons').addEventListener('click', buyLemons);
document.getElementById('buySugar').addEventListener('click', buySugar);
document.getElementById('buyCups').addEventListener('click', buyCups);
document.getElementById('upgradeLemonadeStand').addEventListener('click', upgradeLemonadeStand);
document.getElementById('upgradeProducer').addEventListener('click', upgradeProducer);

function makeLemonade() {
  const lemonadeAmount = producerLevel;
  if (lemons >= lemonadeAmount && sugar >= lemonadeAmount && cups >= lemonadeAmount) {
    lemons -= lemonadeAmount;
    sugar -= lemonadeAmount;
    cups -= lemonadeAmount;
    updateDisplay();
  }
}

function sellLemonade() {
  money += prices.lemonade;
  updateDisplay();
}

function buyLemons() {
  if (money >= prices.lemon) {
    money -= prices.lemon;
    lemons++;
    updateDisplay();
  }
}

function buySugar() {
  if (money >= prices.sugar) {
    money -= prices.sugar;
    sugar++;
    updateDisplay();
  }
}

function buyCups() {
  if (money >= prices.cup) {
    money -= prices.cup;
    cups++;
    updateDisplay();
  }
}

function upgradeLemonadeStand() {
  const upgradeCost = lemonadeStandLevel * 50;
  if (money >= upgradeCost) {
    money -= upgradeCost;
    lemonadeStandLevel++;
    prices.lemonade += 1;
    updateDisplay();
  }
}

function upgradeProducer() {
  const upgradeCost = producerLevel * 100;
  if (money >= upgradeCost) {
    money -= upgradeCost;
    producerLevel++;
    updateDisplay();
  }
}

function updateDisplay() {
  moneyElement.textContent = money;
  lemonsElement.textContent = lemons;
  sugarElement.textContent = sugar;
  cupsElement.textContent = cups;
  document.getElementById('lemonadeStandCost').textContent = lemonadeStandLevel * 50;
  document.getElementById('producerCost').textContent = producerLevel * 100;
}

function changeWeather() {
  const weatherTypes = ['Sunny', 'Cloudy', 'Rainy'];
  const weatherIndex = Math.floor(Math.random() * weatherTypes.length);
  const weather = weatherTypes[weatherIndex];

  let demandMultiplier;
  switch (weather) {
    case 'Sunny':
      demandMultiplier = 1.5;
      break;
    case 'Cloudy':
      demandMultiplier = 1;
      break;
    case 'Rainy':
      demandMultiplier = 0.5;
      break;
  }

  prices.lemonade = Math.round(2 * demandMultiplier);
  document.getElementById('weather').textContent = weather;
  document.getElementById('lemonadePrice').textContent = prices.lemonade;
}

setInterval(changeWeather, 10000);
