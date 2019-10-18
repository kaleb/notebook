export default function scanFold<X, Y>(accumulator: (acc: Y, value: X) => Y, seed: Y, xs: Iterable<X>): IterableIterator<Y>;
export default function scanFold<X, Y>(accumulator: (acc: Y, value: X) => Y, seed: Y): ScanFoldPartial<X, Y>;
export default function scanFold<X, Y>(accumulator: (acc: Y, val: X) => Y, seed: Y, maybeXs?: Iterable<X>) {
    if (maybeXs === undefined) {
        return (xs => ScanFoldGenerator(accumulator, seed, xs)) as ScanFoldPartial<X, Y>;
    }
    return ScanFoldGenerator(accumulator, seed, maybeXs);
}

export type ScanFoldPartial<X, Y> = (xs: Iterable<X>) => IterableIterator<Y>;

export function *ScanFoldGenerator<X, Y>(accumulator: (acc: Y, val: X) => Y, seed: Y, iterable: Iterable<X>): IterableIterator<Y> {
    yield seed;
    let value = seed;
    for (const i of iterable) {
        value = accumulator(value, i);
        yield value;
    }
}