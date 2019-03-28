<!–– STEP 1: Set up the HTML. This includes textbox, button and labels needed for output––> 
<font face="verdana" size="3">
3.28.2019 - shashi (day 115)<br><br>
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the 
exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects 
(from 0 and above);
This function should return a number (final grade). There are four types of final grades:
<br>
100, if a grade for the exam is more than 90 OR if a number of completed projects more than 10.<br>
90, if a grade for the exam is more than 75 AND if a number of completed projects is minimum 5.<br>
75, if a grade for the exam is more than 50 AND if a number of completed projects is minimum 2.<br>
0, in other cases.<br><br><hr>
Score Total (0-100)<br><input type="text" id="score" style="font-size:16px;" size="5"><br>
Projects completed<br><input type="text" id="projects" style="font-size:16px;" size="5"><br><br>
<input type="button" onclick="getFinalGrade()" class="button" value="Calculate!"><br><br>	
Grade:  <label id ="grade"></label> <br>
<hr>
</font>
<!–– STEP 2: Function that calculates the final grade based on score and project count.––>
<script type="text/javascript">

function getFinalGrade() {
  var score = document.getElementById("score").value;
  var projects = document.getElementById("projects").value;
  var output="";
  
  	if ((score <0 || score >100) || (projects<0)) output = "Invalid input.";
    else if (score > 90 || projects > 10) output= 100;
    else if (score > 75 && projects >= 5) output= 90;
    else if (score > 50 && projects >= 2) output= 75;
    else output = 0;
     
   document.getElementById("grade").innerHTML = output;	
}
</script>

<!–– STEP 3: (OPTIONAL) Styling of button)––>
<style>
.button {
  background-color: #6f627c;
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
