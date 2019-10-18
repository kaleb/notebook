import {ActionMeta} from '.';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT
 */
export const Put: Put = {
    name: 'PUT',
    hasRequestBody: true,
    hasResponseBody: false,
    isSafe: false,
    isIdempotent: true,
    isCacheable: false,
    isAllowedInHtmlForms: false,
}

export interface Put extends ActionMeta {
    readonly name: 'PUT';
    readonly hasRequestBody: true;
    readonly hasResponseBody: false;
    readonly isSafe: false;
    readonly isIdempotent: true;
    readonly isCacheable: false;
    readonly isAllowedInHtmlForms: false;
}
