import * as assert from 'assert';
import scanFold from '../scan-fold';

function add(x: number, y: number) {
    return x + y;
}

describe('scan-fold', () => {
    it('returns seed value for empty iterable', () => {
        const i = scanFold(add, 0, []);
        let result = i.next();
        assert.ok(!result.done);
        assert.strictEqual(result.value, 0);
        result = i.next();
        assert.ok(result.done);
    });
});
