import random

def make_HTML_heading(f):
    txt = f()
    print(txt)
    def inner():
        return '<h1>' + txt + '</h1>'
    return inner

# equiv to greet = makeHTMLheading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', 'AYO!', 'Hola', 'Bonjour', 'Word up']
    return random.choice(greetings)

# greet_heading = make_HTML_heading(greet)
# print(greet_heading())

# Apply a DECORATOR
# Once you apply it, iti s part of the function.
# You can't decouple them.
print(greet())

#Closure to achieve memoization to do a fib(n) calculator.
#Then, do it using a decorator.
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

def memoize(f):
    memo = {}
    def helper():
        #memo.add(f)
    return helper

fib = memoize(fib)
print(fib(40))
