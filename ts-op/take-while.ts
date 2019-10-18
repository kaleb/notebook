export default function *takeWhile<T>(predicate: (x: T) => any, iterable: Iterable<T>): IterableIterator<T> {
    for (const i of iterable) {
        if (!predicate(i)) {
            return i;
        }
        yield i;
    }
}
