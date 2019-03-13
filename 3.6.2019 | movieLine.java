/*
3.6.2019 - shashi
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of
them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order 
people follow in the line?
Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise 
return NO.

Examples:
ticketCounter({25, 25, 50}) // => YES 
ticketCounter({25, 100}) // => NO. Vasya will not have enough money to give change to 100 dollars
ticketCounter({25, 25, 50, 50, 100}) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two 
bills of 25 from one of 50)

*/

public class movieLine {
    
    public static String ticketCounter(int[] peopleCash)    //function starts here
    {
        int count25bills = 0;                               //variables to keep track of 25s and 50s.
        int count50bills = 0;
        
        //loop through each person's cash in the line
        for (int person = 0;  person < peopleCash.length; person++) 
        {
            if (peopleCash[person] == 25) count25bills++;           //if person gave 25, increase 25 counter
            if (peopleCash[person] == 50) {  count25bills--;  count50bills++; } //if person has 50, return 25, keep 50.
            if (peopleCash[person] == 100) {     //if person has 100        
                if (count50bills > 0) {          //if clerk has 50s
                    count50bills--;              //return a 50
                    count25bills--;              //return a 25
                } else {                         //if clerk does not have 50s     
                    count25bills = count25bills - 3;    //return 3 25s back
                }
            }
            if (count25bills < 0) return "Not enough change.";    //if no 25s left, no change left.
        }
        return "Enough change."; //if code reaches here then it means enough change is available.
}
    
    //testing out the function
    public static void main(String[] args)
    {
        System.out.println(movieLine.ticketCounter(new int[] {25, 25, 50}));      //YES
        System.out.println(movieLine.ticketCounter(new int[] {25, 100}));      //NO
        System.out.println(movieLine.ticketCounter(new int[] {25, 25, 50, 50, 100}));      //NO
        System.out.println(movieLine.ticketCounter(new int[] {25,50,25,25}));      //NO
        
    }
    
}





Language Version:  JDK 10.0.1
