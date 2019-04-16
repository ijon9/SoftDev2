def union(setA, setB):
    d = [setB,setA]
    return {y for x in d for y in x}


#Test
print(union({1,2,3}, {2,3,4}))
#================================================================
def intersection(setA, setB):
    return {x for x in setA if x in setB}

#Test
print(intersection({1,2,3}, {2,3,4}))

def difference(setA, setB):
    return {x for x in setA if not x in setB}

#Test
print(difference({1,2,3}, {2,3,4}))
print(difference({2,3,4},{1,2,3}))
#================================================================
def Sdifference(setA, setB):
    return union({x for x in setA if not x in setB},{x for x in setB if not x in setA})

#Test
print(Sdifference({1,2,3}, {2,3,4}))
print(Sdifference({2,3,4},{1,2,3}))

def cartProduct(setA, setB):
    return {(x, y) for x in setA for y in setB}
#Test
print(cartProduct({1,2}, {"red", "white"}))
