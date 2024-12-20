export class ErrorHandler {
  static handleCalculationError(error: Error): string {
    const errorMessages: { [key: string]: string } = {
      'Division by zero': 'Cannot divide by zero',
      'Invalid operation': 'Operation not supported',
      'Invalid number format': 'Invalid number entered',
      'Cannot calculate factorial of negative number': 'Factorial requires non-negative number',
      'Cannot calculate square root of negative number': 'Square root requires non-negative number',
      'Invalid input for logarithm': 'Logarithm requires positive number'
    };

    return errorMessages[error.message] || 'An error occurred';
  }
}