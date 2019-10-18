import 'reflect-metadata';
import { Injectable, LogType } from './decorators';

@Injectable()
class Person {
    @LogType name: string = ''
    @LogType dob: Date = new Date;

    @LogType
    getName(): string {
        return this.name;
    }
}

class Student extends Person {
}
const s = new Student();
const metadata = Reflect.getMetadataKeys(s, 'name');
console.log(metadata);
