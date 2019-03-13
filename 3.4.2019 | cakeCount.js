3.4.2019 - shashi<br>
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?<br>
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and 
returns the maximum number of cakes Pete can bake (integer). <br>For simplicity there are no units for the
amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the
objects, can be considered as 0.
<p id = "code"></p>
<script>
function cakeCount(recipe, available)   //function starts here
{
  var result = [];  //to hold result
  for (var ingr in recipe)  //loop through items in recipe list
    if (ingr in available)  //if item from recipe is in available list
      result.push(Math.floor(available[ingr]/recipe[ingr])); //send division of whats available/whats needed
    else
      return 0; //else return 0
      
  return Math.min.apply(Math, result);	//return least value of result array and return it.
} //end of function

//testing function
var recipe= {flour: 500, sugar: 200, eggs: 1};
var available= {flour: 1200, sugar: 1200, eggs: 5, milk: 200};

document.getElementById("code").innerHTML = "Recipe:" + JSON.stringify(recipe) + 
"<br>Available:" + JSON.stringify(available)+"<br> Cakes:" +cakeCount(recipe, available)+"<br><br>";

recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
available = {sugar: 500, flour: 2000, milk: 2000};
document.getElementById("code").innerHTML += "Recipe:" + JSON.stringify(recipe) + 
"<br>Available:" + JSON.stringify(available)+"<br> Cakes:" +cakeCount(recipe, available)+"<br><br>";

</script>
