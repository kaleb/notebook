import * as iterable from './functors/iterable';

export const TAG = Symbol();

export type Morphism<A, B> = (a: A) => B;

export interface FunctorStatic {
    map<A, B>(f: Morphism<A, B>, fa: Functor<A>): Functor<B>
}
export interface Functor<A> {
    map<B>(f: Morphism<A, B>): Functor<B>
}

export interface map {
    <A, B>(f: Morphism<A, B>, functor: Array<A>): Array<B>;
    <A, B>(f: Morphism<A, B>, functor: Iterable<A>): Iterable<B>;
    <A, B>(f: Morphism<A, B>, functor: Promise<A>): Promise<B>;
    <A, B>(f: Morphism<A, B>, functor: Functor<A>): Functor<B>;
}

export const map = function map<X, Y>(f: (x: X) => Y, functor: Functor<X>) {
    if (isPromiseLike(functor)) {
        return (functor as PromiseLike<X>).then(f);
    }
    if (!Array.isArray(functor) && isIterable(functor)) {
        return iterable.map(f, functor as Iterable<X>);
    }
    return functor.map(f);
} as map;

export interface FunctorMorphism<A, B> {
    (fa: Array<A>): Array<B>
    (fa: Functor<A>): Functor<B>
}
export const fmap = function<A, B>(f: Morphism<A, B>): FunctorMorphism<A, B> {
    return function <FA extends Functor<A>>(fa: FA) {
        return fa.map(f) as any;
    }
}

function isIterable(x: unknown): x is Iterable<unknown> {
    return x && typeof x === 'object' && hasMethod(x, Symbol.iterator);
}

function *mapIterable<A, B>(f: Morphism<A, B>, fa: Iterable<A>) {
    for (const a of fa) yield f(a);
}

function hasMethod(obj: object|null, key: PropertyKey) {
    return !!obj && typeof (obj as any)[key] === 'function';
}

function isPromiseLike(x: unknown): x is PromiseLike<unknown> {
    return x && typeof x === 'object' && hasMethod(x, 'then');
}
