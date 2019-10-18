import {iteratorFromIterable as iter} from './iterator';
import next from './next';

export default function head<T>(iterable: Iterable<T>): T|undefined;
export default function head<T>(iterable: Iterable<T>, defaultValue: T): T;
export default function head<T>(iterable: Iterable<T>, defaultValue?: T): T|undefined {
    return next(iter(iterable), defaultValue);
}
