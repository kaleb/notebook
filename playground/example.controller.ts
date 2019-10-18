import 'reflect-metadata';

@console.log
class ExampleController {
    getOne(id: string, test: ExampleController) {

    }
}

const getParams = Reflect.getMetadata('design:paramtypes', ExampleController, 'getOne'); //?+
Reflect.getMetadataKeys(ExampleController); //?+
Reflect.getMetadataKeys(ExampleController, 'getOne'); //?+

Reflect.getMetadataKeys(new ExampleController); //?+
Reflect.getMetadataKeys(new ExampleController, 'getOne'); //?+

Reflect.getOwnMetadataKeys(ExampleController); //?+
Reflect.getOwnMetadataKeys(ExampleController, 'getOne'); //?+

Reflect.getOwnMetadataKeys(ExampleController.prototype); //?+
Reflect.getOwnMetadataKeys(ExampleController.prototype, 'getOne'); //?+

Reflect.getOwnMetadataKeys(new ExampleController); //?+
Reflect.getOwnMetadataKeys(new ExampleController, 'getOne'); //?+
