import { OperationType } from '../types/operations';
import { performCalculation } from '../utils/calculations';
import { ScientificCalculator } from '../utils/scientific';
import { NumberFormatter } from '../utils/formatter';
import { InputValidator } from '../utils/validation';
import { ErrorHandler } from '../models/error-handler';

export class CalculatorService {
    private currentValue: number = 0;
    private previousValue: number | null = null;
    private operation: OperationType | null = null;

    calculate(): { result: number; error?: string } {
        try {
            if (this.previousValue === null || this.operation === null) {
                return { result: this.currentValue };
            }

            InputValidator.validateDivision(this.operation === '/' ? this.currentValue : 1);
            
            const result = performCalculation(
                this.previousValue,
                this.currentValue,
                this.operation
            );

            return { result: NumberFormatter.parse(result.toString()) };
        } catch (error) {
            return {
                result: this.previousValue || 0,
                error: ErrorHandler.handleCalculationError(error)
            };
        }
    }

    setOperation(op: OperationType): void {
        if (this.previousValue === null) {
            this.previousValue = this.currentValue;
        } else {
            const { result } = this.calculate();
            this.previousValue = result;
        }
        this.operation = op;
        this.currentValue = 0;
    }

    setValue(value: number): void {
        this.currentValue = value;
    }

    clear(): void {
        this.currentValue = 0;
        this.previousValue = null;
        this.operation = null;
    }

    // Scientific calculator methods
    sin(): number {
        return ScientificCalculator.sin(this.currentValue);
    }

    cos(): number {
        return ScientificCalculator.cos(this.currentValue);
    }

    tan(): number {
        return ScientificCalculator.tan(this.currentValue);
    }

    sqrt(): number {
        return ScientificCalculator.sqrt(this.currentValue);
    }

    factorial(): number {
        return ScientificCalculator.factorial(this.currentValue);
    }
}