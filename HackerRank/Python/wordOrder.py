#You are given  n words. Some words may repeat. For each word, output its number of occurrences. The output order should correspond with the input order of appearance of the word. See the sample input/output for clarification.

#Note: Each input line ends with a "\n" character.

n = int(input())

d = {}

for i in range(n):
    s = input()
    if(s in d):
        d[s] += 1
    else:
        d[s] = 1
        
    
print(len(d))
for key in d:
    print(d[key], end=' ')
