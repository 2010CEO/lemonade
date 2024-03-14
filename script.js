let money = 0;
let lemons = 0;
let sugar = 0;
let cups = 0;

const moneyElement = document.getElementById('money');
const lemonsElement = document.getElementById('lemons');
const sugarElement = document.getElementById('sugar');
const cupsElement = document.getElementById('cups');

document.getElementById('makeLemonade').addEventListener('click', makeLemonade);
document.getElementById('sellLemonade').addEventListener('click', sellLemonade);
document.getElementById('buyLemons').addEventListener('click', buyLemons);
document.getElementById('buySugar').addEventListener('click', buySugar);
document.getElementById('buyCups').addEventListener('click', buyCups);

function makeLemonade() {
  if (lemons > 0 && sugar > 0 && cups > 0) {
    lemons--;
    sugar--;
    cups--;
    updateDisplay();
  }
}

function sellLemonade() {
  money += 2;
  updateDisplay();
}

function buyLemons() {
  if (money >= 1) {
    money--;
    lemons++;
    updateDisplay();
  }
}

function buySugar() {
  if (money >= 1) {
    money--;
    sugar++;
    updateDisplay();
  }
}

function buyCups() {
  if (money >= 1) {
    money--;
    cups++;
    updateDisplay();
  }
}

function updateDisplay() {
  moneyElement.textContent = money;
  lemonsElement.textContent = lemons;
  sugarElement.textContent = sugar;
  cupsElement.textContent = cups;
}