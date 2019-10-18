import { map } from './functor';

const add1 = (a: number) => a + 1;

const a1 = map(add1, [1, 2, 3]);
console.log(a1);

function *gen() {
    yield 1;
    yield 2;
    yield 3;
}

const b1 = map(add1, {[Symbol.iterator]() { return gen(); }});
console.log(Array.from(b1));
console.log(Array.from(b1));