import { OperationType } from '../types/operations';

export function performCalculation(
  firstValue: number,
  secondValue: number,
  operation: OperationType
): number {
  switch (operation) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    case '/':
      if (secondValue === 0) {
        throw new Error('Division by zero');
      }
      return firstValue / secondValue;
    default:
      throw new Error('Invalid operation');
  }
}