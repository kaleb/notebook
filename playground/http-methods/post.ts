import {ActionMeta} from '.';

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
 */
export const Post: Post = {
    name: 'POST',
    hasRequestBody: true,
    hasResponseBody: true,
    isSafe: false,
    isIdempotent: false,
    isCacheable: false,
    isAllowedInHtmlForms: true,
}

export interface Post extends ActionMeta {
    readonly name: 'POST';
    readonly hasRequestBody: true;
    readonly hasResponseBody: true;
    readonly isSafe: false;
    readonly isIdempotent: false;
    readonly isCacheable: false;
    readonly isAllowedInHtmlForms: true;
}
