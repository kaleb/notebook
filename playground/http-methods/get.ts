import {ActionMeta} from './index';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET
 */
export const Get = {
    name: 'GET',
    hasRequestBody: false,
    hasResponseBody: true,
    isSafe: true,
    isIdempotent: true,
    isCacheable: true,
    isAllowedInHtmlForms: true,
} as Get;

export interface Get extends ActionMeta {
    readonly name: 'GET';
    readonly hasRequestBody: false;
    readonly hasResponseBody: true;
    readonly isSafe: true;
    readonly isIdempotent: true;
    readonly isCacheable: true;
    readonly isAllowedInHtmlForms: true;
}
