export class ValidationUtils {
    static validateDivision(divisor: number): void {
        if (divisor === 0) {
            throw new Error('Division by zero is not allowed');
        }
    }

    static validateFactorial(n: number): void {
        if (n < 0) {
            throw new Error('Cannot calculate factorial of negative number');
        }
    }

    static validateLogarithm(value: number): void {
        if (value <= 0) {
            throw new Error('Invalid input for logarithm');
        }
    }
}