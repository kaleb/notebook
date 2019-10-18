export default function *zipAllLongestIterator(...iterators: Iterator<any>[]) {
    const len = iterators.length;
    if (!len) {
        return;
    }
    while (true) {
        const results = [];
        let active = len;
        for (let i = 0; i < len; i++) {
            const {value, done} = iterators[i].next();
            if (done) {
                active--;
            }
            results.push(value);
        }
        if (!active) {
            return results;
        }
        yield results;
    }
}
