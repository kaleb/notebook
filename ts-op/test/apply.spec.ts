import * as assert from 'assert';
import apply from '../apply';

function add(a: number, b: number) {
    return a + b;
}

describe('apply', () => {
    it('curries', () => {
        const increment = apply(add, 1);
        assert.strictEqual(increment(2), 3);
        const const4 = apply(increment, 3);
        assert.strictEqual(const4(), 4);
    });
});
