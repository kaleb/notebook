export default function next<T>(iterator: Iterator<T>): T|undefined;
export default function next<T>(iterator: Iterator<T>, defaultValue: T): T;
export default function next<T>(iterator: Iterator<T>, defaultValue?: T): T|undefined {
    const result = iterator.next();
    return result.done ? defaultValue : result.value;
}
