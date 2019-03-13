//3.5.2019 - shashi 
//program that accepts a sentence and reverses all words that are >3 characters. 
import java.util.Arrays; //import util.Arrays to implement array functions 
public class rotateSentence {//class begins here 
public static void main(String[] args) //main() begins here
    System.out.println(rotateWords("Hello! This is a test!")); //function call 
    System.out.println(rotateWords("She sells sea shells on the sea shore.")); //function call 
}//end of main()

//function starts here 
public static String rotateWords(String sentence)
{
   String[] words = sentence.split(" "); //split words in the String into an array
   for (int i=0; i<words.length; i++) { //loop through each word and reverse it. 
      if (words[i].length() > 3) { //if word length is >3, then reverse it. 
           words[i] = new StringBuilder(words[i]).reverse().toString(); //replace same element with reversed version of it. 
         } //end if 
     }//end loop 
return String.join(" ",words); //return joined version of array with a space delimiter. 

}//function ends here 

}//class ends here
