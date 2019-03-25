'''
3.25.2019 - shashi
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:

I I I I    each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1
   
You will get an Array with Numbers, e.g.: [3,5,9] and remove them from the field like this:

I I   I
 I   I
  I   
   I   
'''

def bowlingPins(array):     #function starts here

    #matrix representing the value assigned to each of the pins. 0 represents SPACES.
    pinArrangement = [[7, 0, 8, 0, 9, 0, 10],
                      [0, 4, 0, 5, 0, 6, 0],
                      [0, 0, 2, 0, 3, 0, 0],
                      [0, 0, 0, 1, 0, 0, 0]]
    finalGrid = ""          #to hold the final pin arrangement.
    
    #loop through the 2d array
    for row in range(len(pinArrangement)):                                                  #loop through 4 rows (0-3)
        for col in range(len(pinArrangement[row])):                                         #loop through 7 columns (0-6)
            if pinArrangement[row][col] != 0 and pinArrangement[row][col] not in array:     #if [row][col] element not in array AND [row][col] not a 0
                finalGrid = finalGrid + "|"                                                 #add a pin to that place (it wasn't knocked down)
            else:
                finalGrid = finalGrid + " "                                                 #else add a SPACE to that spot. Indicating, it was removed.
        #end of inner loop        
        finalGrid = finalGrid + "\n"                                                        #outer loop NEWLINE after each COL 
    #end of outer loop
    return finalGrid                                                                        #return final output back

#test function
print(bowlingPins([1,3,5,10]))                                                              #remove pins 1,3,5 and 10
print(bowlingPins([7,5,3,1]))                                                               #remove pins 7,5,3 and 1
print(bowlingPins([]))                                                                      #remove nothing
