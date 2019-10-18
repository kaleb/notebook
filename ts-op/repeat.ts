export default function *repeat<T>(value: T, count: number) {
    while (count--) {
        yield value;
    }
}
