/**
 * https://gist.github.com/Avaq/1f0636ec5c8d6aed2e45
 */

/**
 * The I combinator
 * @param a
 */
export function identity<A>(a: A) {
    return a;
}

/**
 * The K combinator
 * @param a
 */
export function constant<A>(a: A) {
    return (...discarded: any[]) => a;
}

/**
 * The A combinator
 * I am unsure how this is of any use.
 * @param f
 */
export function apply<A extends unknown[], Z>(f: (...a: A) => Z) {
    return (...a: A) => f(...a);
}

/**
 * The T combinator
 * AKA applyTo
 * @param a
 */
export function thrush<A extends unknown[]>(...a: A) {
    return <Z>(f: (...a: A) => Z) => f(...a);
}

/**
 * The W combinator
 * @param f
 */
export function duplication<A, Z>(f: (a1: A, a2: A) => Z) {
    return (a: A) => f(a, a);
}

/**
 * The C combinator
 * @param f
 */
export function flip<A, B, C extends unknown[], Z>(f: (a: A, b: B, ...c: C) => Z) {
    return (b: B, a: A, ...c: C) => f(a, b, ...c);
}

function istarstar<X, Y extends unknown[], Z>(f: (x: X, ...y: Y) => Z) {
    return (x: X) => (...y: Y) => f(x, ...y);
}

/**
 * The B combinator
 * @param f
 */
export function compose<X extends unknown[], Y, Z>(f: (y: Y) => Z, g: (...x: X) => Y) {
    return (...x: X) => f(g(...x));
}

/**
 * The S combinator
 * @param f
 */
export function substitution<X, Y, Z>(f: (x: X, y: Y) => Z) {
    return (g: (x: X) => Y) => (x: X) => f(x, g(x));
}

/**
 * The P combinator
 * @param f
 */
export function psi<Y, Z>(f: (y1: Y, y2: Y) => Z) {
    return <X>(g: (x: X) => Y) => (x1: X, x2: X) => f(g(x1), g(x2));
}

/**
 * The Z combinator
 * Non-lazy form of the Y combinator
 * @param f
 */
// export function fix(f) {
//     return (g => g(g))(g => f(x => g(g)(x)));
// }
