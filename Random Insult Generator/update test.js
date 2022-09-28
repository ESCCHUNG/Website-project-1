var randomStrings = [
    "Top 5 Ways To insert user input here ",
    "Trash",
    "Noob",
    "Plant",
    "Can",
    "Dump",
    "Tard",
    "Bad",
    "Dumb",
    "Poop"  // Note: No comma after last entry
];
function RndMsg() {
  var msg = randomStrings[Math.floor(Math.random()*randomStrings.length)];
  
  var newMsg= '';
  $.each(randomStrings, function(i, str){
    
    if (str === msg){
      newMsg = str + ' ' + $('#keyword').val();
      randomStrings[i] = newMsg;
      return false;
      }
    
    });
    
  document.getElementById('randomDiv').innerHTML = newMsg;
}