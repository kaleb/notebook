import {ActionMeta} from './index';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
 */
export const Head: Head = {
    name: 'HEAD',
    hasRequestBody: false,
    hasResponseBody: false,
    isSafe: true,
    isIdempotent: true,
    isCacheable: true,
    isAllowedInHtmlForms: false,
}

export interface Head extends ActionMeta {
    readonly name: 'HEAD';
    readonly hasRequestBody: false;
    readonly hasResponseBody: false;
    readonly isSafe: true;
    readonly isIdempotent: true;
    readonly isCacheable: true;
    readonly isAllowedInHtmlForms: false;
}
