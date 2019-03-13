3.8.2019 - shashi<br>
Complete the method so that it formats the words into a single comma separated value.
The last word should be separated by the word 'and' instead of a comma. 
The method takes in an array of strings and returns a single formatted string. Empty 
string values should be ignored. Empty arrays or null/nil values being passed into the
method should result in an empty string being returned.
<br><br>
formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
<br>formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
<br>formatWords([]) // should return ""
<p id = "code"></p>
<script>

function structureWords(wordArray)
{//function starts here
	if (wordArray === null || wordArray.length <=0)  //STEP 1: Error check
  	return "Invalid Input!";
	
    //STEP 2: Remove extra spaces from each word
	for(var i=0;i<wordArray.length;i++)
    {
    	wordArray[i] = wordArray[i].trim();
    }
    
    //STEP 3: Depending on how many words were sent, process it accordingly.
	if (wordArray.length < 2){  //if only one word sent
 	 return wordArray.join(""); //return the word back
	}
  
	if (wordArray.length === 2){	//if 2 words sent
  	return words.join(" and "); //join them with "and" and return
	}

	if (wordArray.length > 2)
    {	//if more than 2 words sent
 		for(var i = 0; i < wordArray.length-2; i++)
		 { //loop every word and add a comma (,) next to every word except last
   		 wordArray[i] = wordArray[i] + ", ";
 		 }//end loop
 
 		 //add an "and" between the last 2 words
  		wordArray[wordArray.length-2] = wordArray[wordArray.length-2] + " and ";
  		finalSentence = wordArray.join("");  //combine all single words into one sentence.
 		return finalSentence; 				//return it back
  	}//end of if word length > 2
}//end of function

document.getElementById("code").innerHTML = structureWords(['ninjas ', 'samurai', 'ronin']) + "<br>";	//valid
document.getElementById("code").innerHTML += structureWords(['oneword']) + "<br>";						//single entry
document.getElementById("code").innerHTML += structureWords(['John   S  ',' M  Brown','Mr. Fox']) + "<br>";	//extra spaces
document.getElementById("code").innerHTML += structureWords([]) + "<br>";								//invalid
</script>
