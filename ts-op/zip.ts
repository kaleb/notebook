import iter from './iterator';
export default function *zip<T0, T1>(i0: Iterable<T0>, i1: Iterable<T1>): IterableIterator<[T0, T1]> {
    const iterator0 = iter(i0);
    const iterator1 = iter(i1);
    while (true) {
        const result0 = iterator0.next();
        const result1 = iterator1.next();
        if (result1.done || result0.done) {
            return [result0.value, result1.value];
        }
        yield [result0.value, result1.value];
    }
}
