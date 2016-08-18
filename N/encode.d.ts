/**
 * N/encode NetSuite module
 */

export declare interface ConvertOptions {
   string:string
   inputEncoding:Encoding
   outputEncoding:Encoding
}

/**
 * Holds the string values for supported encoding specifications.
 */
export declare enum Encoding {
   UTF_8,
   BASE_16,
   BASE_32,
   BASE_64,
   BASE_64_URL_SAFE,
   HEX
}

/**
 * Converts a string to another type of encoding and returns the re-encoded string.
 */
export declare function convert(options:ConvertOptions):string;
