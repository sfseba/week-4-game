$(document).ready(function()
{
  var randNum = Math.floor(Math.random() * 101) + 19;
  var counter = 0;
  var lose = 0;
  var wins = 0;
  var crystalOne = Math.floor(Math.random() * 11) + 1;
  var crystalTwo = Math.floor(Math.random() * 11) + 1;
  var crystalThree = Math.floor(Math.random() * 11) + 1;
  var crystalFour = Math.floor(Math.random() * 11) + 1;
  var lockButtons = false;

//show random number


  $("#randomNumber").html(randNum);
  console.log('here');



//each crystal generated random number

$("#one").append(crystalOne);
$("#one").on('click', function(){
  counter += crystalOne;
  $("#scoreMine").html(counter);
  result();
  //alert("hi" + crystalOne + counter);
});

$("#two").append(crystalTwo);
$("#two").on('click', function(){
  counter += crystalTwo;
  $("#scoreMine").html(counter);
  result();
});

$("#three").append(crystalThree);
$("#three").on('click', function(){
  counter += crystalThree;
  $("#scoreMine").html(counter);
  result();
});

$("#four").append(crystalFour);
$("#four").on('click', function(){
  counter += crystalFour;
  $("#scoreMine").html(counter);
  result();
});


//$(".crystal-image").on("click", function(){
  //($(this).append(crysRandNum));
  //crystalValue = parseInt(crystalValue);
  //alert("hi" + crystalValue);
  //counter += crystalValue;
//})//on click closed
//console.log(counter);
result = function() {
if (counter === randNum) {
  $("#message").html("you are a winner ~!" + " restart to play more");
  wins += 1;
  $("#wins").html("win game count: " + wins);

//setTimeout(function(){
//  location.reload();}, 10000);
}


else if (counter >= randNum) {
  $("#message").html("you are a loser ~!" + " restart to play more");
  lose += 1;
  $("#lose").html("lose game count: "+ lose);

  //setTimeout(function(){
    //location.reload();}, 10000);

}
} //result closed
play = function(){
  var randNum = Math.floor(Math.random() * 101) + 19;
  var counter = 0;
  var lose = 0;
  var wins = 0;
  var crystalOne = Math.floor(Math.random() * 11) + 1;
  var crystalTwo = Math.floor(Math.random() * 11) + 1;
  var crystalThree = Math.floor(Math.random() * 11) + 1;
  var crystalFour = Math.floor(Math.random() * 11) + 1;
  result();
}

$('button').on('click', function(){
location.reload();

//$('#scoreMine').html("");
//$('#message').html("");
//$('#wins').html("");
//$('#lose').html("");
}) //restart closed
}); // (document).ready(function) closed
