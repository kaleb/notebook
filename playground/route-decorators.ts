import * as HttpMethod from './http-methods';

export function Route(name?: string): ClassDecorator {
    return target => Reflect.defineMetadata(Route, name, target);
}

interface ActionData {
    path: string;
    method: HttpMethod.ActionMeta;
}
export function Action(method: HttpMethod.ActionMeta) {
    return function(path = ''): MethodDecorator {
        const action: ActionData = {path, method};
        return (target, propertyKey) => Reflect.defineMetadata(Action, action, target, propertyKey);
    }
}
Action.get = function(target: Object, propertyKey: string|symbol) {
    return Reflect.getMetadata(Action, target, propertyKey);
}

export const Get = Action(HttpMethod.Get);
// export const Head = Action(HttpMethod.Head);
export const Post = Action(HttpMethod.Post);
export const Put = Action(HttpMethod.Put);
export const Delete = Action(HttpMethod.Delete);
export const Options = Action(HttpMethod.Options);
export const Patch = Action(HttpMethod.Patch);
