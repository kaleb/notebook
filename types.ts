type Morphism<A, B> = (a: A) => B;
type Endomorphism<A> = (a: A) => A;
type Predicate<A> = (a: A) => boolean;

function identity<A>(a: A) {
    return a;
}

[].concat