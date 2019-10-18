import {iteratorFromIterable as iteratorFrom} from './iterator';
import scanFold from './scan-fold';

export default function scanReduce<X>(accumulator: (x1: X, x2: X) => X, xs: Iterable<X>): IterableIterator<X>;
export default function scanReduce<X>(accumulator: (x1: X, x2: X) => X): ScanReducePartial<X>;
export default function scanReduce<X>(acc: (x1: X, x2: X) => X, maybeXs?: Iterable<X>) {
    if (maybeXs === undefined) {
        return (xs => ScanReduceGenerator(acc, xs)) as ScanReducePartial<X>;
    }
    return ScanReduceGenerator(acc, maybeXs);
}

export type ScanReducePartial<X> = (xs: Iterable<X>) => IterableIterator<X>;

export function *ScanReduceGenerator<X>(acc: (x1: X, x2: X) => X, xs: Iterable<X>): Iterable<X> {
    const iterator = iteratorFrom(xs);
    const {done, value} = iterator.next();
    if (done) {
        return value;
    }
    yield *scanFold(acc, value, {
        [Symbol.iterator]() {
            return iterator;
        },
    });
}
