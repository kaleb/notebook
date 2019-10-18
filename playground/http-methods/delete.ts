import {ActionMeta} from '.';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE
 */
export const Delete: Delete = {
    name: 'DELETE',
    hasRequestBody: false,
    hasResponseBody: false,
    isSafe: false,
    isIdempotent: true,
    isCacheable: false,
    isAllowedInHtmlForms: false,
}

export interface Delete extends ActionMeta {
    readonly name: 'DELETE';
    readonly hasRequestBody: false;
    readonly hasResponseBody: false;
    readonly isSafe: false;
    readonly isIdempotent: true;
    readonly isCacheable: false;
    readonly isAllowedInHtmlForms: false;
}
