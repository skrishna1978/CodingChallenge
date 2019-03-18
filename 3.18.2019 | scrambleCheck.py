#3.18.2019- shashi
#program that accepts 2 strings and check if string 1, if scrambled, can result in string 2.
#approach used is counting specific characters between the strings.

def scrambleCheck(string1,string2):                                 #function starts here
    
    uniqueList = set(string2);                                      #make a unordered list of unique elements from 2nd string
    for eachChar in uniqueList:                                     #loop through each character in list
        if string1.count(eachChar) < string2.count(eachChar):       #if count of that character in string 1 is less than its count in string 2
            return False                                            #then it means string 2 does not exist in string 1

    return True                                                     #if code reaches here then string 2 can be scrambled in string 1.       
#end of function

#test function
print(scrambleCheck("freighter","great"))                             #false (missing an 'a')
print(scrambleCheck("narespaemmigdutolva","advantage"))               #true. 'advantage' exists in 'narespaemmigdutolva'
print(scrambleCheck("conception","tenpen"))                           #false (missing an extra 'e')
#end of code
