'''
3.23.2019 - shashi
day 110.
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.
Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
'''

def removeBackSpace(string):            #function starts here                                           Ex: "abc#d##c"
    output = []                         #to hold final output
    for eachLetter in string:           #loop through each character in the string
        if eachLetter != '#':           #if the symbol # was not found                           
            output.append(eachLetter)   #add that to the array                                          [a] then [a,b] then [a,b,c] then else
        else:
            output = output[:-1]        #if # found, then keep everything except last item.             [a,b] the first time # is found since 'c' removed.
    #end loop                                                                                           [
    
    output = ''.join(output)            #connect all elements in array as one.
    return output                       #return final value back

#testing function
print(removeBackSpace("abc#d##c"))            #array elements during loop >> [a], [a,b], [a,b,c], [a,b], [a,b,d], [a], [a,c]
print(removeBackSpace("a#bc#d"))              #array elements during loop >> [a], [], [b], [b,c], [b], [b,d]
print(removeBackSpace("abc##d######"))        #array elements during loop >> [a], [a,b], [a,b,c], [a,b], [a], [a,d], [a], [],[],[],[],[]
#end of code    
