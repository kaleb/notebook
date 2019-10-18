import enumerate from './enumerate';
import filter from './filter';

export default function slice<T>(iterable: Iterable<T>, stop: number): IterableIterator<T>;
// tslint:disable-next-line:unified-signatures
export default function slice<T>(iterable: Iterable<T>, start: number, stop: number, step?: number): IterableIterator<T>;
export default function *slice<T>(iterable: Iterable<T>, startOrStop: number, maybeStop?: number, step: number = 1): IterableIterator<T> {
    const [start, stop] = maybeStop === undefined ? [0, startOrStop] : [startOrStop, maybeStop];
    const predicate = step < 0 ? (n: number) => stop < n : (n: number) => stop > n;
    let index = 0;
    for (const i of iterable) {
    }
    filter(([i, x]) => i === , enumerate(iterable));
}
