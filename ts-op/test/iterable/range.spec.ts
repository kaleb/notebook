import * as assert from 'assert';
import range from '../../iterable/range';

describe('range', () => {
    it('makes ranges', () => {
        assert.deepStrictEqual([...range(4)], [0, 1, 2, 3]);
        assert.deepStrictEqual([...range(-4)], []);
        assert.deepStrictEqual([...range(1, 5)], [1, 2, 3, 4]);
        assert.deepStrictEqual([...range(0, 20, 5)], [0, 5, 10, 15]);
        assert.deepStrictEqual([...range(0, -4, -1)], [0, -1, -2, -3]);
        assert.deepStrictEqual([...range(0)], []);
        assert.deepStrictEqual([...range(0, -4)], []);
    });
});
