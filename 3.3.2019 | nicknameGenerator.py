#3.3.2019 - shashi
#program accepts a full name and generates a nick name based on first 3 or 4 letters.
#if 3rd letter is not a vowel (consonant), return first 3 letters.

def nickGenerate(nameString):
    
    if not nameString:                                      #if name blank
        return "Invalid entry"
        
    if(any(char.isdigit() for char in nameString)):          #if name contains a digit/number in it
        return "Invalid entry"
    
    if len(nameString) < 4:                  #check if name is long enough
        return "Name too short already" 
    elif nameString[2] not in 'aeiou':       #check if 3rd letter is a consonant
        return nameString[:3]                #return first 3 letters back
    elif nameString[2] in 'aeiou':           #check if 3rd letter is a vowel
        return nameString[:4]                #return first 4 letters back
#end of function

#test function
print(nickGenerate(""))                     #error for blank entry
print(nickGenerate("hello123"))             #error for name containing digits/numbers
print(nickGenerate("Robert"))               #3rd letter is not a vowel. So, "Rob" returned.
print(nickGenerate("Gregory"))              #3rd letter is a vowel. So, "Greg" returned.
print(nickGenerate("Jennifer"))             #3rd letter not a vowel. So, "Jen" returned.
