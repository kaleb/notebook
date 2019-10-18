import {iteratorFromIterable as iter} from './iterator';

export default function last<T>(iterable: Iterable<T>, defaultValue?: T): T {
    const iterator = iter(iterable);
    let result = iterator.next();
    if (result.done) {
        if (typeof defaultValue === 'undefined') {
            throw new TypeError('Last of empty iterable');
        }
        return defaultValue;
    }
    let previousValue: T;
    do {
        previousValue = result.value;
        result = iterator.next();
    }
    while (!result.done);
    return previousValue;
}
