export {Get} from './get'
export {Options} from './options';
export {Head} from './head';
export {Post} from './post';
export {Put} from './put';
export {Delete} from './delete';
export {Patch} from './patch';

export type HttpMethod =
    | 'GET'
    | 'OPTIONS'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'TRACE'
    | 'CONNECT'
;

export interface ActionMeta {
    readonly name: HttpMethod;
    readonly hasRequestBody: boolean;
    readonly hasResponseBody: boolean;
    readonly isSafe: boolean;
    readonly isIdempotent: boolean;
    readonly isCacheable: boolean;
    readonly isAllowedInHtmlForms: boolean;
}
