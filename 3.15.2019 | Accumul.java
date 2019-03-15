//3.15.2019 - shashi
//program that accepts a String pattern and prints them as follows:
//1st character : uppercase, 1 print
//2nd character : lowercase, 2 prints (first print UPPER)
//3rd character : lowercase, 3 prints (first print UPPER)

public class Accumul {
  public static String accum(String s) {    //function starts here
  
  String output= "";                        //to hold the final output
  for(int eachChar=0;eachChar<s.length();eachChar++)    //loop through each character in original String
  {
      output = output+(Character.toUpperCase(s.charAt(eachChar)));  //convert first character to UPPER for each character
      output = output + convertRestToLower(s.charAt(eachChar),eachChar); //add to it the lowercase conversion + as many times as loop
      if(eachChar!=s.length()-1) output = output+"-";       //if string sequence still in middle, add - (hyphen)
  }//end of loop
  return output; //return final output
  }

  //this function converts a character sent to lower case "times" number of times and returns it back
  public static String convertRestToLower(char c, int times)
  {
      String output="";
      for(int i=1;i<=times;i++){
          output=output+Character.toLowerCase(c);
      }
      return output;
  }//end of function
  
	public static void main(String[] args)
    {
        System.out.println(Accumul.accum("ZpglnRxqenU"));       //Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
        System.out.println(Accumul.accum("Mumble"));       //M-Uu-Mmm-Bbbb-Lllll-Eeeeee
    }//end of main
}//end of class
