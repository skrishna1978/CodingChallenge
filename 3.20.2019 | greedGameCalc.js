3.19.2019 - shashi<br>
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
<br><br>
 Three 1's => 1000 points<br>
 Three 6's =>  600 points<br>
 Three 5's =>  500 points<br>
 Three 4's =>  400 points<br>
 Three 3's =>  300 points<br>
 Three 2's =>  200 points<br>
 One   1   =>  100 points<br>
 One   5   =>   50 point<br>
<br>
A single die can only be counted once in each roll. For example, a "5" can only count as 
part of a triplet (contributing to the 500 points) or as a single 50 points, but not both 
in the same roll.
<br><br>
Example scoring
<br><br>
 Throw            &nbsp;&nbsp;&nbsp;&nbsp;Score<br>
 ---------   &nbsp;&nbsp;&nbsp;&nbsp;   ------------------<br>
 5 1 3 4 1  &nbsp;&nbsp;&nbsp;&nbsp;  50 + 2 * 100 = 250<br>
 1 1 1 3 1 &nbsp;&nbsp;&nbsp;&nbsp;   1000 + 100 = 1100<br>
 2 4 4 5 4  &nbsp;&nbsp;&nbsp;&nbsp;  400 + 50 = 450<br><br>
.
<p id = "code"></p>
<script>
function dieScore( diceRoll ) {
  var oneCount=0, 
  	  twoCount=0,
      threeCount =0;
      fourCount=0,
      fiveCount=0,
      sixCount=0;
      
  var loopCounter = 0;
  //STEP 1: Count how many of each possible value exist in die roll.
  while (loopCounter < 5) {
    if (diceRoll[loopCounter] == 1) { oneCount++; }
    if (diceRoll[loopCounter] == 2) { twoCount++; }
    if (diceRoll[loopCounter] == 3) { threeCount++; }
    if (diceRoll[loopCounter] == 4) { fourCount++; }
    if (diceRoll[loopCounter] == 5) { fiveCount++; }
    if (diceRoll[loopCounter] == 6) { sixCount++; }
    loopCounter++;
  }
  
  //STEP 2: Calculate the score based on counts
  var result = 0;
  if (oneCount > 2) { result += 1000; oneCount = oneCount-3;}
  if (twoCount > 2) { result += 200; }
  if (threeCount > 2) { result += 300; }
  if (fourCount > 2) { result += 400; }
  if (fiveCount > 2) { result += 500; fiveCount = fiveCount - 3;}
  if (sixCount > 2) { result += 600; }
  
  //additional points for 1s and 5s
  result = result +(oneCount * 100);
  result = result +(fiveCount * 50);
  
  return result; //final output sent back.
}

//testing function
document.getElementById("code").innerHTML = dieScore( [5, 1, 3, 4, 1]) + "<br>"
document.getElementById("code").innerHTML += dieScore( [4, 4, 4, 3, 3] ) + "<br>"
document.getElementById("code").innerHTML += dieScore( [1, 6, 6, 6, 5] ) + "<br>"
document.getElementById("code").innerHTML += dieScore( [1, 1, 1, 3, 1] ) + "<br>"

</script>
