import * as assert from 'assert';
import all from '../../iterable/all';

describe('iterable/all', () => {
    it('returns true if all values are truthy', () => {
        assert.ok(all(x => x % 2, [1, 3, 5]));
    });
    it('returns false if any values are falsey', () => {
        assert.ok(!all(x => x % 2, [1, 2, 3]));
    });
    it('does not fully consume the iterator if a falsey value is found', () => {
        let count = 0;
        const iterator: IterableIterator<number> = {
            next() { return {done: false, value: count++}; },
            [Symbol.iterator]() { return this; },
        };

        assert.ok(!all(i => i < 5, iterator));
        assert.strictEqual(iterator.next().value, 6);
    });
});
