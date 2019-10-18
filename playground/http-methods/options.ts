import {ActionMeta} from './index';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
 */
export const Options = {
    name: 'OPTIONS',
    hasRequestBody: false,
    hasResponseBody: true,
    isSafe: true,
    isIdempotent: true,
    isCacheable: false,
    isAllowedInHtmlForms: false,
} as Options;

export interface Options extends ActionMeta {
    readonly name: 'OPTIONS';
    readonly hasRequestBody: false;
    readonly hasResponseBody: true;
    readonly isSafe: true;
    readonly isIdempotent: true;
    readonly isCacheable: false;
    readonly isAllowedInHtmlForms: false;
}
