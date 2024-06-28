nota1 = float(input("insira a primeira nota:"))
nota2 = float(input("insira a segunda nota:"))
nota3 = float(input("insira terceira nota:"))
nota4 = float(input("insira a quarta nota:"))

notaFinal = (nota1 + nota2 + nota3 + nota4) /4

print("a nota final é", notaFinal)
print(f"a nota é {notaFinal}")

if notaFinal < 60:
    print("o aluno esta reprovado!")
elif notaFinal < 70:
    print("o resultando foi bom")
elif notaFinal < 80:
    print ("o resultaado foi otimo")
else:
    print("resultado exelente!parabens")

