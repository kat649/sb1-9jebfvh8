export class HistoryManager {
  private _history: string[] = [];
  private readonly MAX_HISTORY_ITEMS = 10;

  addToHistory(calculation: string): void {
    this._history.unshift(calculation);
    if (this._history.length > this.MAX_HISTORY_ITEMS) {
      this._history.pop();
    }
  }

  getHistory(): string[] {
    return [...this._history];
  }

  clearHistory(): void {
    this._history = [];
  }
}