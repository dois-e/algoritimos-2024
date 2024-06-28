peso = float(input("insira o peso:"))
altura = float(input("insira a altura:"))

massaCor = peso/( altura * altura)

print (f"o massaCor é  {massaCor} ")

if massaCor < 15:
    print('muito magro')
elif massaCor < 18.5:
    print ('magreza leve')
elif massaCor < 24.5:
    print('peso normal')
elif massaCor < 29.5:
    print('acima do peso')
elif massaCor < 35.5:
    print('obsidade 1')
elif massaCor < 40:
    print('obesidade 2')
else: 
    print('obsedade 3')


