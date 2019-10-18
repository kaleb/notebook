import {Controller, Route, Get, Post, Put, Delete} from 'tsoa';
import {ObjectID} from 'typeorm';

@Route('users')
class UserController extends Controller {
    @Get()
    index() {}

    @Post()
    create() {}

    @Get('{id}')
    show(): UserModel {
        return {
            _id: '',
            dob: new Date,
            name: '',
        };
    }

    @Put('{id}')
    update() {}

    @Delete('{id}')
    destroy() {}
}

class UserEntity {
    _id: ObjectID;
    name: string;
    dob: Date;
}

type StringIds<T> = {
    [P in keyof T]: T[P] extends ObjectID ? string : T[P];
}

type x = StringIds<UserEntity>;

class UserModel implements StringIds<UserEntity> {
    _id: string;
    dob: Date;
    name: string;
}