import last from './last';
import scanReduce from './scan-reduce';

export default function reduce<T>(accumulator: (a: T, b: T) => T, iterable: Iterable<T>): T {
    return last(scanReduce(accumulator, iterable));
}
