// random value generated
  var y= Math.floor(Math.random() * 10 + 1);
  guess = 1;
// counting the number of guesses
// made for correct Guess
function submit(){
    var x = document.getElementById("guessField").value;
  
// function for number guessed by user     
if(x == y)
{
    alert("CONGRATURATIONS!!!!!!!!!" + playername+"You gussed it right in " + guess +"guess");
    guess = 1;
}
else if(x > y)
{
    guess++;
    alert("opps sorry!! try a smaller number ");
}
else{
    guess++;
    alert("opps sorry!! try a greater number ");
}
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}