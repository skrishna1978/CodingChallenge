3.21.2019 - shashi<br>
In an attempt to boost sales, the manager of the pizzeria you work at has devised a pizza rewards system: if you already made at least 5 orders of 
at least 20 dollars, you get a free 12 inch pizza with 3 toppings of your choice. However, the rewards system may change in the future. Your manager 
wants you to implement a function that, given a dictionary of customers, a minimum number of orders and a minimum order value, returns a set of the customers 
who are eligible for a reward.
<p id = "code"></p>
<script>
function pizzaCustomerReward(customers, minOrders, minPrice) //function starts here
{
  var rewardList = [];						//array to hold reward customers
  for(var customer in customers) 			//loop through each entry in customer array
  {
    var topOrders = customers[customer].filter(value => value >= minPrice).length;		//get top order based on value>=minPrice
    																					//also .length() gets count  
    if (topOrders >= minOrders) rewardList.push(customer);			//if count >= minOrders, then customer qualifies for reward
  }//end loop
  return rewardList;	//return list of names of awarded customers
}//end of function

//calling the function
var minOrders = 5
var minPrice = 20
var customerList = {
    'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
    'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
  }
document.getElementById("code").innerHTML = pizzaCustomerReward(customerList,minOrders,minPrice) + "<br>"
var minOrders = 2
  var minPrice = 50
  var customerList = {'Joey Bonzo': [22, 67, 53, 29], // Has two orders above 50$, which means FREE PIZZA!
    'Jennifer Bonzo': [51, 19], // Only has one order above 50$, so no pizza
    'Arif Khan': [51, 55,25, 20] // Has 4 orders >=20 so FREE PIZZA!
  }
document.getElementById("code").innerHTML += pizzaCustomerReward(customerList,minOrders,minPrice) + "<br>" </script>
