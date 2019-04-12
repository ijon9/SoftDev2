#1)
l12 = [str(x) * 2 for x in range(0,9,2)]
print(l12)
l11 = []
for x in range(0,9,2):
    l11.append(str(x)*2)
print(l11)

#2)
l22 = [7 + (10*x) for x in range(5)]
print(l22)
l21 = []
for x in range(5):
    l21.append(7+(10*x))
print(l22)

#3)
l31 = []
for x in range(3):
    for y in range(0,3):
        l31.append(x*y)
print(l31)
l32 = [x*y for x in range(0,3) for y in range(0,3)]
print(l32)
#4) + 5)


primes = [2]
for x in range(3, 101, 2):
    for k in primes:
        if x % k == 0:
            break
    else:
        primes.append(x)
composites = []
for x in range(101):
    if not(x in primes):
        composites.append(x)
print(primes)
print(composites)

primes = 
