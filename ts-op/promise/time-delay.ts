/**
 * Resolve given value after waiting given milliseconds
 * @param ms milliseconds
 * @param value
 */
export default function timeDelay<T>(ms: number, value?: T) {
    return new Promise<T>(resolve => setTimeout(resolve, ms, value));
}
