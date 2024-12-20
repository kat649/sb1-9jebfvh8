import { ValidationUtils } from './validation-utils';

export class MathUtils {
    static factorial(n: number): number {
        ValidationUtils.validateFactorial(n);
        if (n === 0 || n === 1) return 1;
        return n * this.factorial(n - 1);
    }

    static sqrt(value: number): number {
        if (value < 0) {
            throw new Error('Cannot calculate square root of negative number');
        }
        return Math.sqrt(value);
    }

    static power(base: number, exponent: number): number {
        return Math.pow(base, exponent);
    }
}