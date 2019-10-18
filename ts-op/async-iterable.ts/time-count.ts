export default async function *timer(step: number) {
    let count = 0;
    while (true) {
        yield await delay(step, count += step);
    }
}

/**
 * Resolve given value after waiting given milliseconds
 * @param ms milliseconds
 * @param value
 */
export function delay<T>(ms: number, value: T): Promise<T> {
    return new Promise(resolve => setTimeout(resolve, ms, value));
}
