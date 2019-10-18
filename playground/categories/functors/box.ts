import { Functor, Morphism, TAG } from '../functor';

export class Box<A> implements Functor<A> {
    constructor(readonly value: A) {}
    map<B>(f: Morphism<A, B>) {
        return new Box(f(this.value));
    }
}


declare module '../functor' {
    interface FunctorMorphism<A, B> {
        (fa: Box<A>): Box<B>
    }
}