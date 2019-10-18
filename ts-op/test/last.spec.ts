import * as assert from 'assert';
import last from '../last';

describe('last', () => {
    it('returns last element', () => {
        const value = last([1, 2, 3]);
        assert.strictEqual(value, 3);
    });
    it('returns default for empty iterable', () => {
        const value = last([] as number[], 99);
        assert.strictEqual(value, 99);
    });
    it('throws for empty iterable without default', () => {
        assert.throws(() => {
            last([]);
        });
    });
});
