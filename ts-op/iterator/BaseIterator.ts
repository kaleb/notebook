import DoneIteratorResult from './DoneIteratorResult.js';

export default abstract class BaseIterator<T> implements Iterator<T> {
    /**
     * Whether the status of the iterator is closed
     */
    protected isClosed: boolean = false;
    public abstract next(value?: T): IteratorResult<T>;
    // public return(value: T) {
    //     this.isDone = true;
    //     return new DoneIteratorResult();
    // }
    // public throw(e?: unknown): IteratorResult<never> {
    //     this.isDone = true;
    //     throw e;
    // }
}
