3.12.2019 - shashi<br>
Program that accepts a number and groups them according to their even/odd nature together.<br>
So, if 185756 is sent, then the output is "1,8,575,6". So send an integer, recieve a String.<br>
<p id = "code"></p>
<script>
function separateOddEven(number){		//function starts here
	var valueSeries = number.toString().split('');	//convert number to String and set up series with a split.
	var tempArray = [];	//temp holder of consecutive even/odd values to load into output
	var finalOutput = [];	//array to hold final data series
  
    //loop through value series.
  	for(var eachDigit = 0; eachDigit<valueSeries.length; eachDigit++)
    {
    	tempArray.push(valueSeries[eachDigit]); //push each digit into temp array
        
        //if current digit and its neighbor are NOT both even or odd
    	if(parseInt(valueSeries[eachDigit])%2 != parseInt(valueSeries[eachDigit+1])%2)
        {  	//convert tempArray contents to INT and push them into final output before moving on.
      		finalOutput.push(parseInt(tempArray.join('')));
      		tempArray = [];	//empty out temp array for next set.
    	}//end of IF
  	}//end of FOR

return finalOutput; //return final output back
}//end of function

document.getElementById("code").innerHTML = separateOddEven(188732) + "<br>";	//55,64,7,8,93
document.getElementById("code").innerHTML += separateOddEven(185756) + "<br>";	//1,8,575,6
document.getElementById("code").innerHTML += separateOddEven(2244669) + "<br>";	//224466,9
</script>
