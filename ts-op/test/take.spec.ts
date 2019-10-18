import * as assert from 'assert';
import take from '../take';

describe('iterable/take', () => {
    it('it yields the first n values from an iterable', () => {
        const array = [1, 2];
        assert.deepStrictEqual([...take(0, array)], []);
        assert.deepStrictEqual([...take(1, array)], [1]);
        assert.deepStrictEqual([...take(2, array)], [1, 2]);
        assert.deepStrictEqual([...take(3, array)], [1, 2]);
    });
});
