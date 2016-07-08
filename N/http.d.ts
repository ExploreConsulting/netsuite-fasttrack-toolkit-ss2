/**
 * N/http module
 */




export declare interface ClientResponse {
   /**
    * Not Documented. (6/8/2016)
    */
   toString(): string;
   /**
    * The client response body.
    */
   body: string;
   /**
    * The client response code.
    */
   code: number;
   /**
    * The client response headers. Object key/values not yet documented.
    */
   headers: Object;
   /**
    * Not Documented. (6/8/2016)
    */
   method: string;
   /**
    * Not Documented. (6/8/2016)
    */
   parameters: Object;
   /**
    * Not Documented. (6/8/2016)
    */
   url: string;
}

export declare interface ServerRequest {
   /**
    * Method used to return the number of lines in a sublist.
    */
   getLineCount(options: GetLineCountOptions): number;
   /**
    * Method used to return the value of a sublist line item.
    */
   getSublistValue(options: GetSublistValueOptions): string;
   /**
    * Not Documented.
    */
   toString(): string;
   /**
    * The server request body.
    */
   body: string;
   /**
    * The server request files. Object key/values not yet documented.
    */
   files: Object;
   /**
    * The server request headers. Object key/values not yet documented.
    */
   headers: Object;
   /**
    * The server request http method.
    */
   method: string;
   /**
    * The server request parameters. Object key/values not yet documented.
    */
   parameters: Object;
   /**
    * The server request URL.
    */
   url: string;
}

export declare interface ServerResponse {

   addHeader(options:Object)

   getHeader(options:Object)

   sendRedirect(options:Object)

   setHeader(options:Object)

   renderPdf(options:Object)

   setCdnCaheable(options:Object)

   write(options:{ output:string })

   writeFile(options:Object)
}

export enum CacheDuration {
   LONG,
   MEDIUM,
   SHORT,
   UNIQUE
}

export enum HttpMethod {
   DELETE,
   GET,
   PUT,
   POST
}

interface DeleteOptions {
   /**
    * The HTTP URL being requested.
    */
   url: string;
   /**
    * -optional- The HTTP headers.
    */
   headers?: Object;
}

interface PostOptions {
   /**
    * The HTTP URL being requested.
    */
   url: string;
   /**
    * The POST data.
    */
   body: string | Object;
   /**
    * -optional- The HTTP headers.
    */
   headers?: Object;
}

interface PutOptions {
   /**
    * The HTTP URL being requested.
    */
   url: string;
   /**
    * The PUT data.
    */
   body: string | Object;
   /**
    * The HTTP headers.
    */
   headers?: Object;
}

interface HttpDeleteFunction {
   (options: DeleteOptions): ClientResponse;
   promise(options: DeleteOptions): Promise<ClientResponse>;
}

interface HttpGetFunction {
   (options: GetOptions): ClientResponse;
   promise(options: GetOptions): Promise<ClientResponse>;
}

interface HttpPostFunction {
   (options: PostOptions): ClientResponse;
   promise(options: PostOptions): Promise<ClientResponse>;
}

interface HttpPutFunction {
   (options: PutOptions): ClientResponse;
   promise(options: PutOptions): Promise<ClientResponse>;
}

interface HttpRequestFunction {
   (options: RequestOptions): ClientResponse;
   promise(options: RequestOptions): Promise<ClientResponse>;
}

export declare var get : HttpGetFunction
export declare var post : HttpPostFunction
export declare var put : HttpPutFunction
//export declare var 'delete' : HttpDeleteFunction



