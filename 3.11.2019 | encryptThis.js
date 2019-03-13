3.11.2019 - shashi<br>
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
Your message is a string containing space separated words.<br>
You need to encrypt each word in the message using the following rules:<br>
The first letter needs to be converted to its ASCII code.<br>
The second letter needs to be switched with the last letter. Keepin' it simple: There are no special characters in input.
Examples:<br>
encryptThis("Hello") === "72olle"<br>
encryptThis("good") === "103doo"<br>
encryptThis("hello world") === "104olle 119drlo" <br>
<p id = "code"></p>
<script>
//function starts here
function encryptThis(text) {
  if(text=='') return "Invalid";
  var words = text.split(' '); //split the text based on spaces.
  //loop through each word in the resulting array
  for (var eachWord = 0; eachWord < words.length; eachWord++){
    var lettersInEachWord = words[eachWord].split('');	//split each letter
    var temp ='';
    if (lettersInEachWord.length != 0){	   //word is at least 1 character.
      lettersInEachWord[0] = lettersInEachWord[0].charCodeAt(0); //replace first letter with its ASCII equivalent
      temp = lettersInEachWord[1];								 //swapping second and last letter. store second letter.
      lettersInEachWord[1] = lettersInEachWord[lettersInEachWord.length-1] //replace second letter with last letter
      lettersInEachWord[lettersInEachWord.length-1] = temp; //replace last letter with stored second letter.
    }//end of IF
    
    words[eachWord] = lettersInEachWord.join(''); //connect all changed words with a space.
  }//end of FOR loop
  
  words = words.join(' ');
  return words; //return final version back.
}

document.getElementById("code").innerHTML = encryptThis("Hello") + "<br>";	//valid
document.getElementById("code").innerHTML += encryptThis("") + "<br>";	//invalid
document.getElementById("code").innerHTML += encryptThis("hello world") + "<br>";	//2 words
document.getElementById("code").innerHTML += encryptThis("a sample") + "<br>";	//valid with single char.
</script>
