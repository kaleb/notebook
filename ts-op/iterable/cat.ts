import flatten from './flatten';

export default function *cat<T>(...iterables: Iterable<T>[]) {
    yield *flatten(iterables);
}
