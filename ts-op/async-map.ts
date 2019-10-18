export default async function *map<X, Y>(f: (x: X) => Y, xs: Iterable<X>): AsyncIterableIterator<Y> {
    for (const x of xs) {
        yield f(x);
    }
}

async function main() {
    const squares = map(n => n * n, [1, 2, 3, 4]);
    const iter = squares[Symbol.asyncIterator]();
    const result = iter.next();
}
