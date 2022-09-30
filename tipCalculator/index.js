const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');
const differenceContainerDiv = document.getElementById("differenceContainer");
const differenceDiv = document.getElementById("difference");

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

function payTheDifference(a, b) {
  return Math.round(a * 100) % b;
}

const calculateBill = () => {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value) / 100;
  const totalAmount = bill * tipPercent;
  const total = totalAmount + bill;

  const perPersonTotal = total / numberOfPeople;
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
  const diff = payTheDifference(total, numberOfPeople);
  if (diff > 0) {
    differenceContainerDiv.style.display = 'block';
    differenceDiv.innerText = `${diff} cents`;
  } else {
    differenceContainerDiv.style.display = 'none';
  }
};

const increasePeople = () => {
  numberOfPeople += 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }
  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
};
