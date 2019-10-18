import 'reflect-metadata';

function logger(name: string) {
    return function (...args: any[]) {
        console.log(name, ...args);
    };
}

@logger('class')
class Foo {
    @logger('property')
    hello: 'world';
}