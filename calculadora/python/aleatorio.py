# algoritmo para sortear um numero
import random

def sortear(minimo,maximo):
    return random.randint(minimo,maximo)
minimo = 1                          
maximo = 10

sorteado = sortear(minimo,maximo)
    
num = int(input("insira qualquer numero"))

while True:
    if num > 10 or num < 0:
        print("o numero sorteado é menor")
        num = int(input("insira qualquer numero"))
    elif sorteado < num:
        print("o numero sorteado é menor")
        num = int(input("insira qualquer numero"))
    elif sorteado > num:
        print(" o numero sorteado é maior")
        num = int(input("insira qualquer numero"))
    elif sorteado == num:
        print("acertou! parabens")
        break
    else:
        print("o numero tem que ser entre 1 e 10")
        num = int(input("insira qualquer numero"))