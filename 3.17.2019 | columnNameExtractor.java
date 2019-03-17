//3.17.2019 - shashi
//program that accepts column number and returns its title in Excel/Google Sheets

public class columnNameExtractor {

   public static String getColumnTitle(int colNumber)       //function starts here. Ex: 41
   {        
     if(colNumber<1) return "Invalid column value!";    //error handling IF
    
    String colName="";  //hold final output here.
    String colIndex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     //hold all possible column headings here. concatenate as required further.
    
    int intHolder=-1;                                   //hold int converted values for processed letters.
            
    while (colNumber>0)                                 //as long as column number is 
    {
      intHolder = (colNumber-1)%26;                     //divide by 26 and get remainder. Ex: (41-1)%26 = 40%26 = 14. 0 in 2nd pass.
      char ch = colIndex.charAt(intHolder);             //lookup from alphabet array and connect relevant letter to "ch". Ex: ARR[14] = 'O'.
      colName = ch + colName;                           //add character found to colName. Ex: 'O'. 'A' in 2nd pass. So, 'AO'.
      
       colNumber=(colNumber-1)/26;                       //reduce column number to see if more letters can be processed. Ex: colNumber = 40/26 = 1
    }//loop ends
    
    return colName; //return final output back.
  
}
    //Testing function.
    public static void main(String[] args){
        
        System.out.println("41 = "+getColumnTitle(41));
        System.out.println("1200 = "+getColumnTitle(1200));
        System.out.println("-4 = "+getColumnTitle(-4));
        System.out.println("11 = "+getColumnTitle(11));
    }//end of main()
}//end of class
