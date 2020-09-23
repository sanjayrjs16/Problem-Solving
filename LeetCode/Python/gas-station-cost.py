def canCompleteCircuit(gas, cost):
    for i in range(0,len(gas)):
        if gas[i] < cost[i]:
            continue
        else:
            start = i
            curPos = i
            fuel = gas[curPos]
            while fuel!= 0:
                fuel -= cost[curPos]
                if curPos == len(gas) -1 :
                    curPos = 0
                else:
                    curPos += 1
                fuel += gas[curPos]
                if fuel < cost[curPos]:
                    break
                else:
                    if curPos == start:
                        return start
    return -1

gas  = [1,2,3,4,5]
cost = [3,4,5,1,2]
print(canCompleteCircuit(gas, cost))
                
