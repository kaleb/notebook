import isAsyncIterable from './is-async-iterable';

export default function map<X, Y>(f: (x: X) => Y, xs: Iterable<X>): Iterable<Y>;
export default function map<X, Y>(f: (x: X) => Y): MapPartial<X, Y>;
export default function map<X, Y>(f: (x: X) => Y, maybeXs?: Iterable<X>) {
    if (maybeXs === undefined) {
        return (xs => new MapIterable(f, xs)) as MapPartial<X, Y>;
    }
    return new MapIterable(f, maybeXs) as Iterable<Y>;
}

export type MapPartial<X, Y> = (xs: Iterable<X>) => Iterable<Y>;

export type MapAsyncPartial<X, Y> = (xs: Iterable<X>) => AsyncIterableIterator<Y>;

/**
 * This class is used so that the map function returns a non-consumable iterable
 */
export class MapIterable<X, Y> implements Iterable<Y> {
    constructor(private readonly f: (x: X) => Y, private readonly xs: Iterable<X>) {}
    public [Symbol.iterator]() {
        return MapGenerator(this.f, this.xs);
    }
    public [Symbol.toStringTag]() {
        return `map(${this.f}, ${this.xs})`;
    }
}

/**
 * This class is used so that the map function returns a non-consumable async iterable
 */
export class MapAsyncIterable<X, Y> implements AsyncIterable<Y> {
    constructor(private readonly f: (x: X) => Y, private readonly xs: AsyncIterable<X>) {}
    public [Symbol.asyncIterator]() {
        return MapAsyncGenerator(this.f, this.xs);
    }
    public [Symbol.toStringTag]() {
        return `map(${this.f}, ${this.xs})`;
    }
}

export function *MapGenerator<X, Y>(f: (x: X) => Y, xs: Iterable<X>): IterableIterator<Y> {
    for (const x of xs) {
        yield f(x);
    }
}

export async function *MapAsyncGenerator<X, Y>(f: (x: X) => Y, xs: AsyncIterable<X>|Iterable<X>): AsyncIterableIterator<Y> {
    for await (const x of xs) {
        yield f(x);
    }
}

function mapx<X, Y>(f: (x: X) => Y, xs: AsyncIterable<X>): AsyncIterableIterator<Y>;
function mapx<X, Y>(f: (x: X) => Y, xs: Iterable<X>): IterableIterator<Y>;
function mapx<X, Y>(f: (x: X) => Y, xs: Iterable<X>|AsyncIterable<X>) {
    return isAsyncIterable(xs) ? MapAsyncGenerator(f, xs) : MapGenerator(f, xs);
}
