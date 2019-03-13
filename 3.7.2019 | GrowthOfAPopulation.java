/*
3.6.2019 - shashi
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new 
inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants
At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213
It will need 3 entire years. */

public class GrowthOfAPopulation {
    
    public static void main(String[] args)
    {
        System.out.println(calcYear(1000, 2, 50, 1200)); //3
        System.out.println(calcYear(1500, 5, 100, 5000)); //15
        
    }
    
    //popStart = population at the beginning of a year
    //perIncrease = increase percentage per year
    //flux = people arriving or leaving every year
    //ceiling = population to surpass
    public static int calcYear(int popStart, double perIncrease, int flux, int ceiling) { //function starts here
        int yearsOutput = 0;     //to hold final years value
        int residents = popStart; //set residents to value at the beginning of the year
        
        while(residents < ceiling)  //as long as residents are under the ceiling
        {
            //recalculate residents so that percentge increase and population flux is added to it.
            residents = (int)(residents + (residents * (float)(perIncrease/100)) + flux);
            yearsOutput++; //increase years output until it hits ceiling. Resultng value is required years town needs to get to that/exceed required population.
        }//end loop
        return yearsOutput;
    }//end function
}//end class


Language Version:  JDK 10.0.1
