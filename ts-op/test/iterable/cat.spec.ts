import * as assert from 'assert';
import cat from '../../iterable/cat';

describe('iterable/cat', () => {
    it('concatenates', () => {
        assert.deepStrictEqual([...cat([1, 2], [3, 4])], [1, 2, 3, 4]);
    });
    it('returns empty iterable when given no parameters', () => {
        assert.deepStrictEqual([...cat()], []);
    });
});
