const I = x => x
/**
 * The constant function.
 */
const K = x => y => x
const KI = x => y => y 
const S = x => y => z => x(z)(y(z))
const B = x => y => z => x(y(z))
const C = x => y => z => x(z)(y)
const W = x => y => x(y)(y)
const M = f => f(f)
// const Y = g => ()

/**
 * True
 * 
 * Same as the K combinator.
 */
const TRUE = x => y => x

/**
 * False
 */
const FALSE = x => y => y // == KI == CK

const AND = p => q => p(q)(p)
const OR = p => q => p(p)(q) // == M
// const NOT = p => a => b => p(b)(a)
const NOT = p => p(FALSE)(TRUE) // == C
const XOR = p => q => p(NOT(q))(q)


const zero = f => x => x
const one = f => x => f(x)
const two = f => x => f(f(x))
const three = f => x => f(f(f(x)))
const succ = n => f => x => f(n(f)(x))
