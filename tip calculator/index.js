/* Functions to create 
const calculateBill();
const increasePeople();
const decreasePeople(); */

const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    const bill = Number(billInput.value);
    const tipPercent = Number(tipInput.value) / 100;
    const totalAmount = bill * tipPercent;
    const total = totalAmount + bill;

    const perPersonTotal = total / numberOfPeople;
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
       /*  The reason why You need the '$$' is to
            1) make sure that it is in javascript
            2) make sure the $ shows up next to the total amount per person
           The .toFixed() is there to make sure the decimal in the total per Person section doesn't go past the second decmal place*/
    
};

const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
};

const decreasePeople = () => {
      if(numberOfPeople <= 1){
        return
            /* This if statement makes it so that no other lines of code can be run if the statement is met */
    }
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()

  

};