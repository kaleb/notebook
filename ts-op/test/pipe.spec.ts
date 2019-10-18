import * as assert from 'assert';
import filter from '../filter';
import range from '../iterable/range';
import map from '../map';
import pipe from '../pipe';

describe('pipe', () => {
    it('pipes', () => {
        pipe(range(10), filter((x: number) => x % 2), map((x: number) => x * x));
    });
});
