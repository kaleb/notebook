import count from './iterable/count';
import zip from './zip';

export default function *enumerate<T>(iterable: Iterable<T>, start: number = 0): IterableIterator<[number, T]> {
    yield *zip(count(start), iterable);
}
