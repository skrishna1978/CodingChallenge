<!–– STEP 1: Set up the HTML. This includes textbox, button and labels needed for output––> 
<font face="verdana">
3.28.2019 - shashi (day 114)<br><br>
Program accepts a number in decimal and swaps its bits and returns swapped value equivalent.<br><br>
Enter a number : <input type="text" style="font-size:16px;" size="5" id ="inputNumberID">
<input type="button" onclick="swapBits()" class="button" value="Swap!"><br>	<!––function connected to button.––>
Before Swap :<label id ="before"></label> <br>
 After Swap :<label id ="after"></label> <br><hr>
 Converted  :<label id="output"></label>
<hr>
</font>

<!–– STEP 2: Write the function that does the swap and connect it to the button click.––>
<script type="text/javascript">
function swapBits() //function starts here
{
    var inputNumber = document.getElementById("inputNumberID").value;	//get the value entered in text input on form
    var convertedNumber=0;												//to hold converted number					
    var beforeConversion = (+inputNumber).toString(2);					//convert original number to Base 2 equivalent
    beforeConversion = "00000000".substr(beforeConversion.length) + beforeConversion;	//pad it with leading 0s for 8-bit 
    document.getElementById("before").innerHTML = beforeConversion;		//print it on the HTML page
    
    //the actual conversion where even bits are shifted right by 1 bit and odd bits are shifted left.
    convertedNumber = (((inputNumber & 0xAAAAAAAA) >> 1) | ((inputNumber & 0x55555555) << 1))
    
    //convert new number to Base 2
    var afterConversion = (+convertedNumber).toString(2);
    afterConversion = "00000000".substr(afterConversion.length) + afterConversion;	//pad it with leading 0s.
   
   document.getElementById("after").innerHTML = afterConversion		//print the converted Base 2 equivalent
   document.getElementById("output").innerHTML = convertedNumber;	//print new converted/swapped Base 10 equivalent.
}//end of function
</script>

<!–– STEP 3: (OPTIONAL) Styling of the Swap button (or any other button used on this form)––>
<style>
.button {
  background-color: #1c627c;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
