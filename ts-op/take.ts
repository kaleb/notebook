export default function *take<T>(count: number, iterable: Iterable<T>) {
    for (const i of iterable) {
        if (count-- > 0) {
            yield i;
        }
    }
}
