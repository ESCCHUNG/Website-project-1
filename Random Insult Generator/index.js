const randomize = document.querySelector('.randomize');
const insult = document.querySelector('.insult');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random]; 
}

const insultText = ':insertA: :insertB: :insertC: :insertD:';
const insertA =["Trash", "Noob", "Plant", "Can", "Dump","Tard", "Bad", "Dumb", "Poop"];
const insertB =["plant", "noob", "trash", "can", "dump", "tard", "bad", "dumb", "poop"];
const insertC =["noob", "trash", "can", "dump", "tard", "plant", "bad", "dumb", "poop"];
const insertD =["tard", "plant", "noob", "trash", "can", "dump", "bad", "dumb", "poop"];

randomize.addEventListener('click', result);

function result(){
    let newInsult = insultText;

    const aItem = randomValueFromArray(insertA);
    const bItem = randomValueFromArray(insertB);
    const cItem = randomValueFromArray(insertC);
    const dItem = randomValueFromArray(insertD);


    newInsult = newInsult.replaceAll(':insertA:',aItem);
    newInsult = newInsult.replaceAll(':insertB:',bItem);
    newInsult = newInsult.replaceAll(':insertC:',cItem);
    newInsult = newInsult.replaceAll(':insertD:',dItem);
    
    insult.textContent  = newInsult;
    insult.style.visibility = 'visible';
}

/* find out a way to add strings to an emtpy list with user input */

const userWords = document.getElementsByClassName('userWords');

userWords = '';



