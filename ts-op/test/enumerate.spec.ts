import * as assert from 'assert';
import enumerate from '../enumerate';

describe('enumerate', () => {
    it('enumerates an iterable starting at 0', () => {
        const i = enumerate(['a', 'b']);

        let result = i.next();
        assert.ok(!result.done);
        assert.deepStrictEqual(result.value, [0, 'a']);

        result = i.next();
        assert.ok(!result.done);
        assert.deepStrictEqual(result.value, [1, 'b']);

        result = i.next();
        assert.ok(result.done);
    });
    it('takes a custom start value', () => {
        const i = enumerate(['a', 'b'], 10);

        let result = i.next();
        assert.ok(!result.done);
        assert.deepStrictEqual(result.value, [10, 'a']);

        result = i.next();
        assert.ok(!result.done);
        assert.deepStrictEqual(result.value, [11, 'b']);

        result = i.next();
        assert.ok(result.done);
    });
});
