import * as assert from 'assert';
import count from '../../iterable/count';
import {iteratorFromIterable as iter} from '../../iterator';

describe('count', () => {
    it('starts at zero and increments by ony when given no arguments', () => {
        const i = iter(count());
        let result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 0);
        result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 1);
    });

    it('can take a custom starting point', () => {
        const i = iter(count(100));
        let result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 100);
        result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 101);
    });

    it('can take a custom step count', () => {
        const i = iter(count(0, 10));
        let result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 0);
        result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 10);
    });
});
