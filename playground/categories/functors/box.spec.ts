import { Box } from './box';
import {fmap} from '../functor';

const b1: Box<number> = new Box(1);

const increment = (a: number) => a + 1;

const b2: Box<number> = fmap (increment) (b1);

console.assert(b2.value === 2);

const f1 = fmap(increment);

const b3: Box<number> = f1(b2);

console.assert(b3.value === 3);