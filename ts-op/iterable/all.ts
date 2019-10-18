export default function all<T>(predicate: (x: T) => any, iterable: Iterable<T>): boolean {
    for (const i of iterable) {
        if (!predicate(i)) {
            return false;
        }
    }
    return true;
}
