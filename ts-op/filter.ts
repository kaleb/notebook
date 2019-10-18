export default function filter<X>(p: (x: X) => any, xs: Iterable<X>): IterableIterator<X>;
export default function filter<X>(p: (x: X) => any): FilterPartial<X>;
export default function filter<X>(p: (x: X) => any, maybeXs?: Iterable<X>) {
    if (maybeXs === undefined) {
        return (xs => FilterGenerator(p, xs)) as FilterPartial<X>;
    }
    return FilterGenerator(p, maybeXs);
}

export type FilterPartial<X> = (xs: Iterable<X>) => IterableIterator<X>;

export function *FilterGenerator<X>(p: (x: X) => any, xs: Iterable<X>) {
    for (const x of xs) {
        if (p(x)) {
            yield x;
        }
    }
}
