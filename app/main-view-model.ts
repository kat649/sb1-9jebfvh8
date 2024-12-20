import { Observable } from '@nativescript/core';
import { CalculatorService } from './services/calculator.service';
import { DisplayViewModel } from './components/display/display-view-model';
import { MemoryManager } from './models/memory-manager';
import { NumberFormatter } from './utils/formatter';

export class MainViewModel extends Observable {
    private calculatorService: CalculatorService;
    private displayViewModel: DisplayViewModel;
    private memoryManager: MemoryManager;

    constructor() {
        super();
        this.calculatorService = new CalculatorService();
        this.displayViewModel = new DisplayViewModel();
        this.memoryManager = new MemoryManager();
    }

    get display(): string {
        return this.displayViewModel.display;
    }

    get history(): string[] {
        return this.displayViewModel.history;
    }

    numberInput(args: any): void {
        const button = args.object;
        const num = button.text;
        
        if (this.display === '0') {
            this.displayViewModel.display = num;
        } else {
            this.displayViewModel.display += num;
        }
        
        this.calculatorService.setValue(NumberFormatter.parse(this.display));
    }

    operation(args: any): void {
        const button = args.object;
        this.calculatorService.setOperation(button.text);
        this.displayViewModel.display = '0';
    }

    calculate(): void {
        const { result, error } = this.calculatorService.calculate();
        
        if (error) {
            this.displayViewModel.display = error;
            return;
        }

        const formattedResult = NumberFormatter.format(result);
        this.displayViewModel.display = formattedResult;
        this.displayViewModel.addToHistory(`${this.display} = ${formattedResult}`);
    }

    clear(): void {
        this.calculatorService.clear();
        this.displayViewModel.display = '0';
    }

    memoryAdd(): void {
        this.memoryManager.add(NumberFormatter.parse(this.display));
    }

    memoryRecall(): void {
        const value = this.memoryManager.recall();
        this.displayViewModel.display = NumberFormatter.format(value);
    }

    memoryClear(): void {
        this.memoryManager.clear();
    }
}