export class InputValidator {
  static isValidNumber(value: string): boolean {
    return !isNaN(parseFloat(value)) && isFinite(Number(value));
  }

  static isValidOperation(operation: string): boolean {
    return ['+', '-', '*', '/', '^', 'sqrt', 'sin', 'cos', 'tan', 'log', 'ln'].includes(operation);
  }

  static validateDivision(divisor: number): void {
    if (divisor === 0) {
      throw new Error('Division by zero is not allowed');
    }
  }
}