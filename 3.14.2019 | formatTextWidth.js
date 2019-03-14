3.14.2019 - shashi<br>
Text width based formatter that accepts text and formats it to width specified.<br>
<p id = “code”></p>
<script>
function formatText(text, width) {
 if(width<=0) return “Invalid width entry”;
  text = text.split(’ ‘);			//split the text based on space.
  
  var formattedText = [];		//container to hold final formatted text.
  var lengthOfLine = 0;			//holds length of each line in the formatted text.
  var eachLine = [];			//holder for each line of text.
  
  //loop through the entire text
  for (var i = 0; i < text.length; i++)
  {           
   	 if (lengthOfLine + text[i].length <= width)	//if length + word length <= width required (per line)
   	 {
    	  lengthOfLine += text[i].length;			//increase length by text’s length (controlled later)
    	  eachLine.push(text[i]);					//push the word into that line’s sequence.
    }
    else										 	//if length + word length > width required (exceeds)
    {
  	    formattedText.push(eachLine.join(’ ‘));		//push whatever text is in line into final output
  	    lengthOfLine = text[i].length;				//re-set length of line for next line.
  	    eachLine = [text[i]];						//push word into eachLine
    }
    
    if (i == text.length - 1)						//if loop reaches end of text
      formattedText.push(eachLine.join(’ ‘));		//push remaining data and end
  }//loop ends
  
  //formattedText data is joined together with a <br> (new line in HTML) tag for visibility.
  return formattedText.join(”<br>”);
}

var text = “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the” +
“industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and” +
 “scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap” + 
 “into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the” +
 “release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing” +
 “software like Aldus PageMaker including versions of Lorem Ipsum.”

document.getElementById(”code”).innerHTML = formatText(text,40) + “<br><br><hr>”;
document.getElementById(”code”).innerHTML += formatText(text,-9) + “<br><br><hr>”;
document.getElementById(”code”).innerHTML += formatText(text,18) + “<br><br><hr>”;
</script>
