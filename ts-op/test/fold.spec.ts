import * as assert from 'assert';
import fold from '../fold';

function add(x: number, y: number) {
    return x + y;
}

describe('fold', () => {
    it('returns seed value for empty iterable', () => {
        const i = fold(add, 0, []);
        assert.strictEqual(i, 0);
    });
    it('folds one element', () => {
        const i = fold(add, 0, [1]);
        assert.strictEqual(i, 1);
    });
    it('folds more than one element', () => {
        const i = fold(add, 0, [1, 2]);
        assert.strictEqual(i, 3);
    });
});
