export default function *flatten<T>(iterables: Iterable<Iterable<T>>) {
    for (const i of iterables) {
        yield *i;
    }
}
