import * as assert from 'assert';
import any from '../../iterable/any';

describe('iterable/any', () => {
    it('returns true if any values are truthy', () => {
        assert.ok(any(x => x % 2, [1, 2, 3]));
    });
    it('returns false if all values are falsey', () => {
        assert.ok(!any(x => x % 2, [2, 4, 6]));
    });
    it('does not fully consume the iterator if a truthy value is found', () => {
        let count = 0;
        const iterator: IterableIterator<number> = {
            next() { return {done: false, value: count++}; },
            [Symbol.iterator]() { return this; },
        };

        assert.ok(any(i => i >= 5, iterator));
        assert.strictEqual(iterator.next().value, 6);
    });
});
