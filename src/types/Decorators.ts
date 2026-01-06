export function ValidaDebito(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (valorDoDebito: number) {
    if (valorDoDebito <= 0) {
      throw new Error("O valor do débito deve ser maior que zero.");
    }

    if (valorDoDebito > this.saldo) {
      throw new Error("Saldo insuficiente para a operação de débito.");
    }

    return originalMethod.apply(this, [valorDoDebito]);
  };

  return descriptor;
}

export function ValidaDeposito(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (valorDoDeposito: number) {
    if (valorDoDeposito <= 0) {
      throw new Error("O valor do depósito deve ser maior que zero.");
    }
    return originalMethod.apply(this, [valorDoDeposito]);
  };
  return descriptor;
}
