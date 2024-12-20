import { Observable } from '@nativescript/core';
import { HistoryManager } from '../../models/history-manager';

export class DisplayViewModel extends Observable {
    private historyManager: HistoryManager;
    private _display: string = '0';

    constructor() {
        super();
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

    addToHistory(calculation: string): void {
        this.historyManager.addToHistory(calculation);
        this.notifyPropertyChange('history', this.history);
    }
}