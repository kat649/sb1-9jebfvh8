import { Injectable } from '@nativescript/core';

@Injectable()
export class MemoryService {
    private _memory: number = 0;

    add(value: number): void {
        this._memory += value;
    }

    recall(): number {
        return this._memory;
    }

    clear(): void {
        this._memory = 0;
    }
}