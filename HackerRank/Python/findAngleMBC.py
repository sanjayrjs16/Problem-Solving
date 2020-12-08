#Point M is the midpoint of hypotenuse .

#You are given the lengths AB  and BC.
#Your task is to find  (angle MBC, as shown in the figure) in degrees.

import math
sideAB = float(input())
sideBC = float(input())
hyp = math.sqrt(sideAB**2 + sideBC**2);
print(str(int(round(math.degrees(math.atan2(sideAB,sideBC)))))+'°')
