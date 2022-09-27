const myArr = [];

function pushData(){
    var inputText = document.getElementById('inputText').value;
    myArr.push(inputText);
    var pval = '';
     for (i = 0; i < myArr.length; i++ ){
        pval = pval + myArr[i];
     }
     document.getElementById('pText').innerHTML = pval;
}


