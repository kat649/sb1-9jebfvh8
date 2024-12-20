export class NumberUtils {
    static isInteger(value: number): boolean {
        return Number.isInteger(value);
    }

    static isValidNumber(value: string): boolean {
        return !isNaN(parseFloat(value)) && isFinite(Number(value));
    }

    static parseNumber(value: string): number {
        const parsed = parseFloat(value);
        if (isNaN(parsed)) {
            throw new Error('Invalid number format');
        }
        return parsed;
    }
}