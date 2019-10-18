export default function any<T>(predicate: (x: T) => any, iterable: Iterable<T>): boolean {
    for (const i of iterable) {
        if (predicate(i)) {
            return true;
        }
    }
    return false;
}
