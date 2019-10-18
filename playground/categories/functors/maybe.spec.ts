import {Maybe, Just, empty} from './maybe';
import {fmap} from '../functor';

const m1: Maybe<number> = new Just(1);

const increment = (a: number) => a + 1;

const m2: Maybe<number> = fmap (increment) (m1);

console.assert((m2 as Just<number>).value === 2);

const f1 = fmap(increment);

const m3: Maybe<number> = f1(m2);

console.assert((m3 as Just<number>).value === 3);

const m4 = empty;

const m5 = f1(m4);

console.assert(m5 === empty);
