# Solicita ao usuário a quantidade de números que deseja somar
quantidade = int(input())

# Solicita ao usuário os números separados por vírgula em uma única linha
numeros = input()

# Converte a string de números em uma lista de inteiros, usando split e map
numeros_lista = list(map(int, numeros.split(',')))

# Inicializa a soma total como zero
soma_total = 0

# Usa um loop for para somar apenas a quantidade especificada de números
for i in range(quantidade):
    soma_total += numeros_lista[i]  # Adiciona o número atual à soma total

# Exibe o resultado da soma
print(soma_total)
