/**
 * Also called rightApply
 */
export default function applyEnd<X1, X2, X3, Y>(f: (p1: X1, p2: X2, p3: X3) => Y, x: X3): (p1: X1, p2: X2) => Y;
export default function applyEnd<X1, X2, Y>(f: (p1: X1, p2: X2) => Y, x: X2): (p1: X1) => Y;
export default function applyEnd<X, Y>(f: (p: X) => Y, x: X): () => Y;
export default function applyEnd<X, Y>(f: (...xs: any[]) => Y, x: X): (...xs: any[]) => Y {
    return (...xs: any[]) => f(...xs, x);
}
