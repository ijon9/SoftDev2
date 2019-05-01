# Isaac Jon
# SoftDev2 pd7
# K#22 -- Closure
# 2019-05-01

def repeat(x):
    def function(nums):
        print(nums * x)
    return function

r1 = repeat("hello")
r2 = repeat("goodbye")
r1(2)
r2(2)
repeat('cool')(3)

def make_counter():
    x = 0
    def inner(method="inc"):
        nonlocal x
        if method == "get":
            print(x)
        else:
            x += 1
            print(x)
    return inner

ctr1 = make_counter()
ctr1()
ctr1()
ctr2 = make_counter()
ctr2()
ctr1()
ctr2()
ctr1("get")
ctr2("get")

'''
#================================================================================================================================
def inc(x):
    return x+1

f=inc

#print(f)
#print(inc)
#print(f(10))

def adder(a,b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15 = outer(15)
print(contains_15([1,2,3,4,5]))
print(contains_15([13,14,15,16,17]))
print(contains_15(range(20)))

del outer
#outer(42)

#This does not produce an error because even though outer was deleted, contains_15
#still remembered the result when it was called the first time. This is a closure.
print(contains_15(range(14,20)))

#TO CREATE A CLOSURE
#Define nested fxn
#nested fxn must refer to var defined in enclosing fxn
#return nested fxn


#def outer():
    #x = "foo"
    #def inner():
        #x = "bar"
    #inner()
    #return x

#print(outer())

# def outer():
#     x = "foo"
#     def inner():
#         nonlocal x #Doesn't create local x, looks around for x, finds the one defined outside
#         x = "bar"
#     inner()
#     return x
#
# print(outer())
#================================================================================================================================
'''
