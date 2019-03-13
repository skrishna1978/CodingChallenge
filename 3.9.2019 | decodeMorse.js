3.9.2019 - shashi<br>
In this kata you have to write a simple Morse code decoder. While the Morse code is 
now mostly superceded by voice and digital data communication channels, it still has 
its use in some applications around the world.<br>
The Morse code encodes every character as a sequence of "dots" and "dashes". <br>
For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is 
coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are
used. When the message is written in Morse code, a single space is used to separate 
the character codes and 3 spaces are used to separate words. For example, the message
HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.<br>
NOTE: Extra spaces before or after the code have no meaning and should be ignored.<br>
In addition to letters, digits and some punctuation, there are some special service 
codes, the most notorious of those is the international distress signal SOS (that was 
first issued by Titanic), that is coded as ···−−−···. These special codes are treated 
as single special characters, and usually are transmitted as separate words.<br>

Your task is to implement a function that would take the morse code as input and return a 
decoded human-readable string.<br>
<p id = "code"></p>
<script>
//Morse Dictionary for lookup.
MORSE_CODE = {".-": "A","-...": "B","-.-.": "C","-..": "D",".": "E","..-.": "F","--.": "G",
    "....": "H","..": "I",".---": "J","-.-": "K",".-..": "L","--": "M","-.": "N","---": "O",
    ".--.": "P","--.-": "Q",".-.": "R","...": "S","-": "T","..-": "U","...-": "V",".--": "W",
    "-..-": "X","-.--": "Y","--..": "Z","-----": "0",".----": "1","..---": "2","...--": "3",
    "....-": "4",".....": "5","-....": "6","--...": "7","---..": "8","----.": "9"};

decodeMorse = function(morseCode){   //function starts here
  var decodedAnswer = '';   //variable to hold final output
  //STEP 1: Split up the message first by words.
  var morseCodeElements = morseCode.split('   ');  //split the code by 3 spaces for words.
  
  //STEP 2: Loop through each WORD and split them further by letter/number
  for (var eachItem in morseCodeElements) {  //loop through each word in the code array
    var eachMorseCode = morseCodeElements[eachItem].split(' '); //split each item by single space
    
    //STEP 3: Each letter is then looked up from lookup Morse dictionary above and translated.
    for (var eachMorseItem in eachMorseCode) {//loop through each morse code
      if (MORSE_CODE[eachMorseCode[eachMorseItem]] !== undefined) { //if valid entry found
        decodedAnswer += MORSE_CODE[eachMorseCode[eachMorseItem]];  //add its relevant lookup
      }//end of IF
    }//end of inner loop
    decodedAnswer += ' ';//add a space after each word.
  }//end of outer loop
  return decodedAnswer.trim();//return trimmed version of answer.
}

document.getElementById("code").innerHTML = decodeMorse('.... . -.--   .--- ..- -.. .') + "<br>";	//valid
</script>
