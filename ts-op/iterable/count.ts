export const DEFAULT_STEP = 1;
export const DEFAULT_START = 0;

export default function count(start: number = DEFAULT_START, step?: number): Iterable<number> {
    return new CountIterable(start, step);
}

function getStep(start: number) {
    return start < 0 ? -1 : 1;
}

export function *CountGenerator(start: number, step: number): IterableIterator<number> {
    let i = start;
    while (true) {
        yield i;
        i += step;
    }
}

export class CountIterable implements Iterable<number> {
    constructor(public readonly start: number, public readonly step: number = getStep(start)) {}
    public [Symbol.iterator]() {
        return CountGenerator(this.start, this.step);
    }
    public [Symbol.toStringTag]() {
        const hasDefaultStep = Math.abs(this.step) === DEFAULT_STEP;
        return `count(${this.start}${hasDefaultStep ? `, ${this.step}` : ''})`;
    }
}
