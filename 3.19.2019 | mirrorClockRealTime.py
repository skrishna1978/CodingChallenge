#3.19.2019 - shashi
#program that accepts mirror image of a clock and prints out its real time.

def realTime(mirrorTime):                   #function starts here. ex: "04:15"

    if ":" not in mirrorTime: return "Invalid time!"
    
    #STEP 1: Deal with times that are same both in real/mirror versions. "04:15" not listed here so ELSE triggers.
    if mirrorTime in ["12:00", "12:30", "06:00", "06:30"]:
        return mirrorTime                                     #if one of these times are sent then return same value back.
    else:
        
        #STEP 2: Split up the hour and mins
        time = mirrorTime.split(":")            #split up time based on : delimiter
        hour = int(time[0])                     #first element in array is the hour. Ex: 4
        mins = int(time[1])                     #second element in array is the minute(s) Ex: 15
        
        
        #STEP 3: Process mirror time to get real equivalent
        if mins == 0:                           #if mins are 0
            hour = 12 - hour                    #deduct 12 from hour sent. Ex: "05:00" becomes "07:00" since mirror image.
            mins = 0                            #retain mins.
        else:                                   #if mins not 0. Ex: 15.
            hour = (11 - hour) % 12             #hour = (11-4) % 12 = 7 % 12 = 7    
            mins = 60 - mins                    #mins = 60 - 15 = 45

            if hour == 0: hour = 12             #if hour ends up being 0, make it 12.
       
       #STEP 4: Return formatted final value back.
        return "{:02}:{:02}".format(hour, mins) #return string formatted time back. Ex: "07:45".


#testing function    
print("Mirror 04-15 in real time is", realTime("04-15"))    #error check
print("Mirror 00:45 in real time is", realTime("00:45"))    #hour = 0 check
print("Mirror 10:25 in real time is", realTime("10:25"))    #non zero hour check
print("Mirror 01:00 in real time is", realTime("01:00"))    #mins = 0 check
print("Mirror 07:15 in real time is", realTime("07:15"))    #non zero mins check
print("Mirror 11:30 in real time is", realTime("11:30"))    #hour being 0 check
print("Mirror 06:30 in real time is", realTime("06:30"))    #mirror and real being same check
