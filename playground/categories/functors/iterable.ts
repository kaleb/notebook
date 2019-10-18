import {Morphism } from '../functor';

class MapIterable<A, B> implements Iterable<B> {
    readonly [Symbol.iterator]: () => IterableIterator<B>;
    constructor(f: Morphism<A, B>, fa: Iterable<A>) {
        this[Symbol.iterator] = function *() {
            for (const a of fa) yield f(a);
        }
    }
}

/**
 * Returning an iterable as opposed to an iterable will ensure repeatability.
 * 
 * @param f 
 * @param fa 
 */
export function map<A, B>(f: Morphism<A, B>, fa: Iterable<A>): Iterable<B> {
    return new MapIterable(f, fa);
}