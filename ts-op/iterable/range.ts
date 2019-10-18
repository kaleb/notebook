import takeWhile from '../take-while';
import {CountGenerator, DEFAULT_STEP} from './count';

export default function range(stop: number): Iterable<number>;
// tslint:disable-next-line:unified-signatures
export default function range(start: number, stop: number, step?: number): Iterable<number>;
export default function range(startOrStop: number, maybeStop?: number, step?: number): Iterable<number> {
    if (step === 0) {
        throw new RangeError('range step cannot be zero');
    }
    const [start, stop] = maybeStop === undefined ? [0, startOrStop] : [startOrStop, maybeStop];
    return new RangeIterable(start, stop, step);
}

function makePredicate(step: number, stop: number) {
    return step < 0 ? (n: number) => stop < n : (n: number) => stop > n;
}

export function RangeGenerator(start: number, stop: number, step: number) {
    return takeWhile(makePredicate(step, stop), CountGenerator(start, step));
}

export class RangeIterable implements Iterable<number> {
    constructor(public readonly start: number, public readonly stop: number, public readonly step: number = DEFAULT_STEP) {}
    public [Symbol.iterator]() {
        return RangeGenerator(this.start, this.stop, this.step);
    }
    public [Symbol.toStringTag]() {
        if (this.step === DEFAULT_STEP) {
            return `range(${this.start}, ${this.stop})`;
        }
        return `range(${this.start}, ${this.stop}, ${this.step})`;
    }
}
