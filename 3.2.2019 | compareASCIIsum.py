#3.2.2019 - shashi
# program that accepts 2 strings and finds the sum of their ASCII values. If they match, TRUE returned. Else, FALSE.

def compareASCIIsum(string1,string2): #function starts here
    
    #STEP 1: Error check validation
    if not string1 or not string2:
        return "Invalid inputs"

    #STEP 2: Get the sum of a valid String 1 and String 2
    sumOfString1 = 0
    if string1 is not '':
        for char in string1.upper():    #we will convert all characters to UPPERCASE for consistency
            sumOfString1 = sumOfString1 + ord(char)

    sumOfString2 = 0
    if string2 is not '':
        for char in string2.upper():
            sumOfString2 = sumOfString2 + ord(char)

    #STEP 3: Compare the 2 values. If they are equal, return TRUE.
    if sumOfString1 == sumOfString2:
        return True
    
    #ELSE: return FALSE.    
    return False
#end of function

#testing functions
print(compareASCIIsum("AD","BC"))      #A (65) + D (68) =   133 and B(66) + C(67) = 133. So they are equal. (TRUE)
print(compareASCIIsum("AC","DD"))       #A (65) + C (67) =  132  and D (68) + D (68) = 136. Not equal.       (FALSE)
print(compareASCIIsum("ZzZz", "ffPFF")) #ZZZZ  = 90x4 = 360   AND ffPFF (70x4 + 80 = 280 + 80 = 360). Both are equal. (TRUE)
print(compareASCIIsum("", "FG"))            #blank string sent. "Invalid inputs" returned. (ERROR)
print(compareASCIIsum("FG", ""))            #blank string sent. "Invalid inputs" returned. (ERROR)
#end of program
