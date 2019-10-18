function noop() {}
export function Injectable(): ClassDecorator {
    return noop;
}
export const enum Design {
    Type = 'design:type',
    ParamTypes = 'design:paramtypes',
    ReturnType = 'design:returntype',
}

export function LogType(target: any, propertyKey: string) {
    const type = Reflect.getMetadata(Design.Type, target, propertyKey);
    console.log(type.name);
}

const x: MethodDecorator = <T extends Function>(_target: Object, _key: string|symbol, descriptor: TypedPropertyDescriptor<T>) => {
    if (descriptor.value) {
        descriptor.value();
    }
}

//function advice(metadataKey: any) {
//    return function(value): MethodDecorator {
//        return function<T extends Function>(target, propertyKey, descriptor: TypedPropertyDescriptor<T>) {
//            const f = descriptor.value;
//            f();
//            return descriptor;
//        }
//    }
//}

function Annotator<T=string>(key: any) {
    function f(value: T) {
        return Reflect.metadata(key, value);
    }
    f.key = key;
    f.get = <T>(target: T, propertyKey: keyof T) => Reflect.getMetadata(key, target, propertyKey as string|symbol);
    return f;
}

export const Description = Annotator(Symbol('Description'));
const DISPLAY_NAME = Symbol('DisplayName');

/**
 * Sets display name
 * 
 * @param value The display name
 */
export const DisplayName = Annotator(DISPLAY_NAME);

const serialize = <XS extends never[], Y>(_target: Object, _propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<(...xs: XS) => Y>) => {
    const originalValue = descriptor.value;
    if (!originalValue) {
        throw new Error('function must be defined');
    }
    descriptor.value = function(...xs: XS): Y {
        const value = originalValue(...xs);
        return value;
    }
}

class Test {
    @((t: Object, p: string|symbol, d: PropertyDescriptor) => d.value = ()=>{})
    @serialize
    getInstance() {
        return {
            foo: 'bar',
        };
    }
}