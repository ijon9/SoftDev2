#Isaac Jon
#SoftDev2 pd7
#K16 -- Do You Even List?
#2019-04-12

# List Comprehension format
# [expression for expression if <statements>]

def pwChecker(pw):
    upper = [x for x in pw if x.isupper()]
    lower = [x for x in pw if x.islower()]
    num = [x for x in pw if x.isdigit()]
    if len(upper) > 0 and len(lower) > 0 and len(num) > 0:
        return True
    return False

#Test
print(pwChecker("AsadSdfs32")) #True
print(pwChecker("aasdfajlkja2")) #False
print(pwChecker("ASDFAJLK2")) #False
print(pwChecker("AASDFsdfasda")) #False

SPECIAL_CHARS = ".?!&#,;:-_*"

def pwStrength(pw):
    upper = [x for x in pw if x.isupper()]
    lower = [x for x in pw if x.islower()]
    num = [x for x in pw if x.isdigit()]
    special = [x for x in pw if x in SPECIAL_CHARS]

    score = 10

    if len(special) == 0:
        score -= 3
    if len(upper) == 0:
        score -= 2
    if len(lower) == 0:
        score -= 2
    if len(num) == 0:
        score -= 2

    return score

#Test
print(pwStrength("Ab3.")) #10
print(pwStrength("Ab3")) #7
print(pwStrength("Ab")) #5
print(pwStrength("A")) #3
print(pwStrength("")) #1
