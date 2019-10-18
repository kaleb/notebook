/**
 * Also called leftApply
 */
export default function apply<X, XS extends unknown[], Y>(f: (x: X, ...xs: XS) => Y, x: X) {
    return (...xs: XS) => f(x, ...xs);
}
