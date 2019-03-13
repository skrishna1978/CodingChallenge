3.13.2019 - shashi<br>
a simple post fix notation evaluator that processes symbols : +, -, * and / using a stack<br>
<p id = "code"></p>
<script>
function postFixProcessor(equationString) //function starts here. testing ("2 2 +") as an example.
{
  var stack = [];											//stack array
  equationString = equationString.split(' ');				//load up single values into array	[2][2][+]	
  for (var eachVal = 0; eachVal < equationString.length; eachVal++)	//loop through all contents of equation		 
  {
      if (equationString[eachVal] == '+')			//if add symbol found. [last loop '+' found so [2] and [2] added to 0th index.
      {
          var val2 = stack.pop();							//remove top most element in stack
          var val1 = stack.pop();							//remove next top most element in stack
          stack.push(val1 + val2);							//push their sum back.
      }
      else if (equationString[eachVal] == '-')				//if subtraction symbol found
      {
          var val2 = stack.pop();							//remove top most element
          var val1 = stack.pop();							//remove next top most element
          stack.push(val1 - val2);							//subtract them
      }
      else if (equationString[eachVal] == '*')				//same process repeated for multiplication
      {
           var val2 = stack.pop();	
           var val1 = stack.pop();	
          stack.push(val1 * val2);
      }
      else if (equationString[eachVal] == '/')				//and division.
      {
          var val2 = stack.pop();
          var val1 = stack.pop();	
          stack.push(Math.floor(val / val2));				//return largest integer less than divided result.
      }
      else
          stack.push(parseInt(equationString[eachVal]));	//if number found then push that instead.
          //[2][2] added to stack. 
  } //loop ends here
  
  return stack[0]; //return final response stored in first index of stack array
}
document.getElementById("code").innerHTML = "(52 2 2 * +) ="+postFixProcessor("52 2 2 * +") + "<br>";	// (2*2) + 52 = 4 + 52 = 56
document.getElementById("code").innerHTML += "(215 12 6 - +) =" + postFixProcessor("215 12 6 - +") + "<br>"; //(12-6) + 215 = 6 + 215
document.getElementById("code").innerHTML += "(112 4 6 8 - + *) =" + postFixProcessor("112 4 6 8 - + *") + "<br>"; //112 * (4 + (6-8))  = 112 * 2 = 224
</script>
