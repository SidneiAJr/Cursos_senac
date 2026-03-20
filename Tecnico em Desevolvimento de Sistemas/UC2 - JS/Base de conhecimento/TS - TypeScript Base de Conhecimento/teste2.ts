function saldo(): void {
  // Solicita o valor do depósito
  let deposito = prompt("Digite o valor do depósito:");

  // Verifica se o usuário digitou um valor e se é um número válido
  if (deposito === null || isNaN(Number(deposito))) {
    console.log("Valor inválido. Por favor, insira um número.");
  } else {
    let depositoValor: number = Number(deposito);
    console.log(`Depósito realizado: R$ ${depositoValor.toFixed(2)}`);
  }
}
saldo()
