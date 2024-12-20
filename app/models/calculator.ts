import { Observable } from '@nativescript/core';
import { OperationType } from '../types/operations';
import { performCalculation } from '../utils/calculations';
import { MemoryManager } from './memory-manager';
import { HistoryManager } from './history-manager';

export class CalculatorModel extends Observable {
  private _currentValue: number = 0;
  private _display: string = '0';
  private _operation: OperationType | null = null;
  private _previousValue: number | null = null;
  private memoryManager: MemoryManager;
  private historyManager: HistoryManager;

  constructor() {
    super();
    this.memoryManager = new MemoryManager();
    this.historyManager = new HistoryManager();
  }

  get display(): string {
    return this._display;
  }

  set display(value: string) {
    if (this._display !== value) {
      this._display = value;
      this.notifyPropertyChange('display', value);
    }
  }

  get history(): string[] {
    return this.historyManager.getHistory();
  }

  numberInput(num: string) {
    if (this._display === '0' || this._operation === 'equals') {
      this.display = num;
    } else {
      this.display += num;
    }
    this._currentValue = parseFloat(this._display);
  }

  operation(op: OperationType) {
    if (this._previousValue === null) {
      this._previousValue = this._currentValue;
    } else {
      this.calculate();
    }
    this._operation = op;
    this.display = '0';
  }

  calculate() {
    if (this._previousValue === null || this._operation === null) return;

    try {
      const result = performCalculation(
        this._previousValue,
        this._currentValue,
        this._operation
      );

      const calculation = `${this._previousValue} ${this._operation} ${this._currentValue} = ${result}`;
      this.historyManager.addToHistory(calculation);
      this.notifyPropertyChange('history', this.history);

      this._currentValue = result;
      this.display = result.toString();
      this._previousValue = null;
      this._operation = 'equals';
    } catch (error) {
      this.display = error.message;
    }
  }

  clear() {
    this._currentValue = 0;
    this._previousValue = null;
    this._operation = null;
    this.display = '0';
  }

  memoryAdd() {
    this.memoryManager.add(this._currentValue);
  }

  memoryRecall() {
    const value = this.memoryManager.recall();
    this._currentValue = value;
    this.display = value.toString();
  }

  memoryClear() {
    this.memoryManager.clear();
  }
}