import {iteratorFromIterable as iter} from './iterator';
export default function *zip<T0, T1>(iterable0: Iterable<T0>, iterable1: Iterable<T1>): IterableIterator<[T0, T1]> {
    const iterator0 = iter(iterable0);
    const iterator1 = iter(iterable1);
    while (true) {
        const result0 = iterator0.next();
        const result1 = iterator1.next();
        if (result1.done && result0.done) {
            return [result0.value, result1.value];
        }
        yield [result0.value, result1.value];
    }
}

/**
 * Obtain the parameters of a function type in a tuple
 */
type TypeParameter<T extends Iterable<any>> = T extends Iterable<infer P> ? P : never;

const x: TypeParameter<Iterable<number>> = null as any;

