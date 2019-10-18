import {DisplayName} from './decorators';

class ExamplePerson {
    name: string = '';
    @DisplayName('Date of Birth')
    dob: Date = new Date;
}