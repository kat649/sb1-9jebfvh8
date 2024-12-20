export class ScientificCalculator {
  static sin(angle: number): number {
    return Math.sin(angle);
  }

  static cos(angle: number): number {
    return Math.cos(angle);
  }

  static tan(angle: number): number {
    return Math.tan(angle);
  }

  static log(value: number): number {
    if (value <= 0) throw new Error('Invalid input for logarithm');
    return Math.log10(value);
  }

  static ln(value: number): number {
    if (value <= 0) throw new Error('Invalid input for natural logarithm');
    return Math.log(value);
  }

  static pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  static sqrt(value: number): number {
    if (value < 0) throw new Error('Cannot calculate square root of negative number');
    return Math.sqrt(value);
  }

  static factorial(n: number): number {
    if (n < 0) throw new Error('Cannot calculate factorial of negative number');
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }
}