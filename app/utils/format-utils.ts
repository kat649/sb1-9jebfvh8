import { NumberUtils } from './number-utils';

export class FormatUtils {
    static formatNumber(value: number): string {
        if (NumberUtils.isInteger(value)) {
            return value.toString();
        }
        return value.toFixed(8).replace(/\.?0+$/, '');
    }

    static formatCalculation(value: number, operation: string, result: number): string {
        return `${value} ${operation} = ${this.formatNumber(result)}`;
    }
}