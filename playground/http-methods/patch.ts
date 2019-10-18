import {ActionMeta} from './index';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH
 */
export const Patch: Patch = {
    name: 'PATCH',
    hasRequestBody: false,
    hasResponseBody: false,
    isSafe: false,
    isIdempotent: true,
    isCacheable: false,
    isAllowedInHtmlForms: false,
}

export interface Patch extends ActionMeta {
    readonly name: 'PATCH';
    readonly hasRequestBody: false;
    readonly hasResponseBody: false;
    readonly isSafe: false;
    readonly isIdempotent: true;
    readonly isCacheable: false;
    readonly isAllowedInHtmlForms: false;
}
