#gasolina = R$5,49
#alcool = R$3,69

#entrada
print("olá mundo")
precoAlcool = float(input("insira o valor do alcool:"))
precoGasolina = float(input("onsira o valor da gasolina:"))

#processamento
resultado = precoAlcool/precoGasolina

#saida
print(resultado)

#se resultado for maior que 0.7 abastece com gasolina, caso contrario com alcool

if resultado > 0.7:
     print("abasteça com alcool")
else: 
    print("abastece com alcool")
