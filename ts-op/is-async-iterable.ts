export default function isAsyncIterable(object: unknown): object is AsyncIterable<any> {
    return typeof object === 'object' && object != null && Symbol.asyncIterator in object && typeof (object as any)[Symbol.asyncIterator] === 'function';
}
