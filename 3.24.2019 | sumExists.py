#3.24.2019 - shashi
#program accepts an array of numbers A and a number N.
#it returns whether or not a SUM of any 2 numbers in A result in N.

def sumExists(arrayList,number):                 #Ex: ([10, 15, 3, 17],27)
    setOfNumbers = set()                         #empty set 
    for eachNumber in arrayList:                 #loop through each number in [10,15,3,17]
        if number-eachNumber in setOfNumbers:    #if [27-10] in set? No. Set = (10) | if [27-15] in set? No. Set = (10,15) | if [27-3] in set? No.Set = (10,15,3)
            return True                          #if [27-17] in set? Yes! So return TRUE.            
        setOfNumbers.add(eachNumber)
    return False                                 #if loop reaches here then return FALSE.

#testing the function    
print(sumExists([10, 15, 3, 17],27))            #when 10 and 17 are added. TRUE.
print(sumExists([10, 15, 3, 17],21))            #no 2 numbers when added result in 21. FALSE
print(sumExists([101, 25, 13, 7],108))          #when 101 and 7 are added. TRUE.
print(sumExists([101, 25, 13, 7],100))          #no 2 numbers when added result in 100. FALSE.
#end of program
