import last from './last';
import scanFold from './scan-fold';

export default function fold<T, U>(accumulator: (acc: T, val: U) => T, seed: T, iterable: Iterable<U>): T {
    return last(scanFold(accumulator, seed, iterable));
}
