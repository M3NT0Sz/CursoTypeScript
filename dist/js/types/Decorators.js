export function ValidaDebito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDebito) {
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
export function ValidaDeposito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("O valor do depósito deve ser maior que zero.");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
