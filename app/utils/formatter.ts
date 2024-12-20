export class NumberFormatter {
  static format(value: number): string {
    if (Number.isInteger(value)) {
      return value.toString();
    }
    return value.toFixed(8).replace(/\.?0+$/, '');
  }

  static parse(value: string): number {
    const parsed = parseFloat(value);
    if (isNaN(parsed)) {
      throw new Error('Invalid number format');
    }
    return parsed;
  }
}