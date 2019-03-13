3.10.2019 - shashi
<br>Create an addition function that does not utilize the + or - operators.
<br>Anti-cheat tests: You may not use any of these symbols: +-[].'"`<br>
<p id = "code"></p>
<script>

//function starts here
function add (num1, num2) {
	//we use bitwise math to do the sum.
    //so all integers are converted to 32-bit sequences so bitwise logic can be
    //performed on them. 
    //ex: 9 (base 10) = 00000000000000000000000000001001 (base 2)
    //and 14 (base 10) = 00000000000000000000000000001110 (base 2)
    
    //num2 = 14 to start with.
    while (num2 > 0)     //num2 loops until no more carry exists during add
    {	
		var carryValue = num1 & num2;	//AND-ing the two numbers 
        //   00000000000000000000000000001001
        // & 00000000000000000000000000001110 
		//   00000000000000000000000000001000 (8)
        //// Sum of bits of num1 and num2 where at least one of the bits is not set
        num1 = num1 ^ num2;  //00000000000000000000000000000111 (7). Becomes (16) in 2nd loop.
        
        //// carry value shifted to left by 1 in num2. Adding this to num1 helps in summing.
        num2 = carryValue << 1;  // 00000000000000000000000000011100  = 28
    }//end loop
    
    return num1; //return summed value back.
}

document.getElementById("code").innerHTML = add(9,14)+ "<br>";	
document.getElementById("code").innerHTML += add(3,11)+ "<br>";	
</script>
