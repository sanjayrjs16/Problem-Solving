element = "NaCl"
d = {}
i = 0
# digits = [i for i in element if i.isdigit()]
# print(digits)
def updateDict(key, count):
  if key in d.keys():
    d[key] += count
  else:
    d[key] = count

if element[-1].isupper():
  updateDict(element[-1], 1)
  end = len(element) -1
elif element[-1].islower():
  updateDict(element[-2:], 1)
  end = len(element) - 2
else:
  if( element[-2].isUpper()):
    updateDict(element[-2], 1)
    end = len(element) - 2
  else:
    updateDict(element[-3:], 1)
    end = len(element) - 3

while i < end:
  if element[i].isupper():
    if element[i+1].islower():
      if element[i+2].isdigit():
        updateDict(element[i:i+2], int(element[i+2]))
        i+=3
      else:
        updateDict(element[i:i+2], 1)
        i += 2
    elif element[i+1].isdigit():
      updateDict(element[i], int(element[i+1]))
      i += 2
    else:
      updateDict(element[i], 1)
      i+=1
  
print(d)


