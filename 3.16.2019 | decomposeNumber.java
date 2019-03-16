/* 3.16.2019 - shashi
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

 persistence(39) == 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                      // and 4 has only one digit

 persistence(999) == 4 // because 9*9*9 = 729, 7*2*9 = 126,
                       // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) == 0 // because 4 is already a one-digit number
 */
 

public class Persist {
    
  public static int persistence(int number) { //recursive function starts here. Example:  39
    if (number<10) return 0;     //single digit already or negative numbers, return 0.
    
    int nProcess = 1;       //variable to hold continued multiplications
    
    while(number>0) {           //until number remains positive.
    
      nProcess=nProcess * (number%10);     //nProcess = 1 * (39%10) = 1 * 9 = 9
      number=number/10;                     //number = 39/10 = 3. Loop still TRUE.
                                            //nProcess = 9 * (3%10) = 9 * 3 = 27    (second pass)
                                            //number = 3/10 = 0. Loop ends.
    }
    return 1+persistence(nProcess);         //recursion active with 1 (counter of successful debug)+27 (new value to decompose) sent back.
  }                                         //this will happen 2 more times with 27 becoming 14 (2*7) and 14 becoming 4 (1*4).
  
  //testing function
  public static void main(String[] args)
  {
      System.out.println(Persist.persistence(39));      //returns 3
      System.out.println(Persist.persistence(9));      //returns 0
      System.out.println(Persist.persistence(-129));      //returns 0
      System.out.println(Persist.persistence(999));      //returns 4
      
  }//end of main()
  
}//end of class
