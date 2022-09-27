const userWords = document.getElementsByClassName('userWords');
const randomize = document.querySelector('.randomize');
const insult = document.querySelector('.insult');
const array = [];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random]; 
}
const insultText = userWords;
var listWords = userWords.toString().split(" ");



/* look up user input to arry for this problem */