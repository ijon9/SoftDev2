from functools import reduce

# prod = 1
# list = [1,2,3,4]
# for x in list:
#     prod *= x
# print(prod)
#
# print(reduce( (lambda x,y: x*y),
#         [1,2,3,4]))

# Use list comprehensions + reduce
# * Frequency of a single word
# * Total frequency of a group of words
# * Most frequently occurring word

listOfWords = open("text.txt", "r").read().split()
test = ["a", "a", "b", "b", "b", "c", "c", "c", "c"]


def wordFrequency(word):
    return reduce( (lambda x,y: 1 if x == word else y), test)
