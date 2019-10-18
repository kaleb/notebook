import {Functor, Morphism, TAG} from '../functor';

const MAYBE = Symbol();

export abstract class Maybe<A> implements Functor<A> {
    readonly [TAG] = MAYBE;
    abstract map<B>(f: Morphism<A, B>): Maybe<B>;
}

export class Just<A> extends Maybe<A> {
    constructor(readonly value: A) {
        super();
    }
    map<B>(f: Morphism<A, B>): Just<B> {
        return new Just(f(this.value));
    }
}

class Empty<A> extends Maybe<A> {
    map<B>(f: Morphism<A, B>): Empty<B> {
        return empty;
    }
}

export const empty = new Empty<never>();

declare module '../functor' {
    interface FunctorMorphism<A, B> {
        (fa: Maybe<A>): Maybe<B>
    }
}