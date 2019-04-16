#Pythagorean triples on range [1, n)
def pythagoreanTriples(n):
    return [[a,b,c] for a in range(1, n) for b in range(a, n) for c in range(b, n) if a**2 + b**2 == c**2]

print(pythagoreanTriples(50))

#Quicksort algorithm
def quickSort(arr):
    if not(len(arr) > 0):
        return []
    pivot = arr[-1]
    leftPart = [x for x in arr[0:len(arr)-1] if x <= pivot]
    rightPart = [x for x in arr[0:len(arr)-1] if x >= pivot]
    return quickSort(leftPart) + [pivot] + quickSort(rightPart)

#test
t = [7,3,1,12,5]
print(t)
print(quickSort(t))
print(t)
