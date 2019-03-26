3.26.2019 - shashi<br>
Driving can be really stressfull and weary activity especially if you are driving a big truck. Your task is to write 
function which return true if driver exceed daily limit,false otherwise. The only limitation is that driver cant drive in 
total more than 9 hours in 24 hours span.<br>
Function input:<br>
//There will be only hours from same day,only 3 types of activites “Drive”,”Rest”,”Work”<br>
//Limit only applies to “Drive” activity<br>
//We assume that before and after described activities driver was resting.<br>
  var dailyShedule1 = [ [”7:00-10:30”,”Drive”],<br>
                        [”10:30-10:45”,”Rest”],<br>
                        [”10:45-11:45”,”Drive”],<br>
                        [”11:45-12:15”,”Rest”],<br>
                        [”12:15-16:45”,”Drive”],<br>
                        [”16:45-20:15”,”Work”]]; <br>
						//-> should return false,9 hours of driving in total. <br>
<p id = “code”></p>
<script>
function overloadCheck(driverSchedule) 
{
  var totalHoursWorked = 0;
  
  for (var eachSchedule = 0 ; eachSchedule < driverSchedule.length; eachSchedule++) 
  {
    var eachBlock = driverSchedule[eachSchedule];		//load timeslot and activity.
    var timeSlot = eachBlock[0];						//load just the timeslot
    var activity = eachBlock[1];						//load just the activity
    
    if (activity === “Drive”) 							//check if the status is “Drive”
    {
   
	var start = timeSlot.match(/[\d]+[:][\d]+/g)[0];		//do a global search for digits matching “digits”+”:”+”digits” pattern in first index element				
    var finish = timeSlot.match(/[\d]+[:][\d]+/g)[1];		//do a global search for digits matching “digits”+”:”+”digits” pattern in second index element
    var startTime = parseInt(start.split(’:’).join(’’)); 	//get rid of “:” and join the digits. 
    var finishTime = parseInt(finish.split(’:’).join(’’));	//get rid of “:” and join the digits.
	
    //add subtotal of hours by subtracting finish time - start time.
    totalHoursWorked = totalHoursWorked + (finishTime - startTime);		
    }//end of if
  }	//end of loop
  
	if(totalHoursWorked<=900) return “Good to go!”;
    else return “Tired! Stop driving!”;
}

//calling the function
var dailyShedule1 = [[”7:00-10:30”,”Drive”],
                        [”10:30-10:45”,”Rest”],
                        [”10:45-11:45”,”Drive”],
                        [”11:45-12:15”,”Rest”],
                        [”12:15-18:45”,”Drive”],
                        [”18:45-20:15”,”Work”]];
document.getElementById(”code”).innerHTML = overloadCheck(dailyShedule1) + “<br>” 

var dailyShedule2 = [[”5:15-10:15”,”Work”],
                     [”10:00-19:00”,”Drive”]];
  
document.getElementById(”code”).innerHTML += overloadCheck(dailyShedule2) + “<br>” </script>
