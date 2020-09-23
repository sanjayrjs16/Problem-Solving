n, m = map(int, input().split())
arr = map(int, input().split())
A = set(map(int, input().split()))
B = set(map(int, input().split()))
h = 0
d = {}
for i in arr:
    if i in d:
        d[i] += 1
    else:
        d[i] = 1
for key in d.keys():
    if key in A:
        h += d[key]
    elif key in B:
        h -= d[key]
    else:
        continue
print(h)
