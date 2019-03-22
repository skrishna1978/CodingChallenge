//3.22.2019 - shashi
//program that accepts a string of words and reverses them.
//Ex: "hello world there" becomes "there world hello"

public class sentenceReverser {
    
    public static String reverseThis(String sentence)  //function starts here
    {
        if (sentence.length()<=0) return  "Invalid input.";     //handle empty inputs
        
        String[] wordArray = sentence.split(" ");   //split the sentence into a String array
        String finalSentence ="";                   //variable to hold final output
        
        for(int eachWord = wordArray.length-1; eachWord>=0;eachWord--) //loop from last element to first of the array
            finalSentence += wordArray[eachWord]+" ";                   //add each word with a space to output
                                                                        //loop ends here
        
    return finalSentence.trim();                                        //return trimmed final output
    
    }
    
    
    public static void main(String args[]) {
        System.out.println(reverseThis("hello world here"));            //input with words
        System.out.println(reverseThis(""));                            //error call
        System.out.println(reverseThis("2 plus 2 is 4"));               //input with numbers
        System.out.println(reverseThis("single"));                      //input with single word
    }
}
