enum SuccessfuleResponse {
    /**
     * The request has succeeded. The meaning of a success varies depending on the HTTP method:
     * GET: The resource has been fetched and is transmitted in the message body.
     * HEAD: The entity headers are in the message body.
     * PUT or POST: The resource describing the result of the action is transmitted in the message body.
     * TRACE: The message body contains the request message as received by the server
     */
    OK = 200,

    /** The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a POST request, or after some PUT requests.*/
    Created = 201,

    /** The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.*/
    Accepted = 202,

    /** This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.*/
    NonAuthoritativeInformation = 203,

    /** There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.*/
    NoContent = 204,

    /** This response code is sent after accomplishing request to tell user agent reset document view which sent this request.*/
    ResetContent = 205,

    /** This response code is used because of range header sent by the client to separate download into multiple streams.*/
    PartialContent = 206,
}