// Solicita ao usuário os valores
const valorSalario = parseFloat(prompt("Digite o valor do salário:"));
const valorBeneficio = parseFloat(prompt("Digite o valor dos benefícios:"));

// Calcula o imposto
const valorImposto = calcularImposto(valorSalario);

// Cálculo do salário final
const saida = valorSalario - valorImposto + valorBeneficio;

// Exibe o resultado formatado
console.log(`O valor final é: ${saida.toFixed(2)}`);

function calcularImposto(salario) {
  let aliquota = 0;

  if (salario >= 0 && salario <= 1100) {
    aliquota = 0.05;
  } else if (salario > 1100 && salario <= 2500) { 
    aliquota = 0.10;
  } else {
    aliquota = 0.15;
  }

  return aliquota * salario;
}
