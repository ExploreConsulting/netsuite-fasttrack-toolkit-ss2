/**
 * N/file netsuite module
 */
interface NSFile {
   description:string;
   encoding:string;
   fileType:string;
   folder:number;
   id:number;
   isInactive:boolean;
   isOnline:boolean;
   isText:boolean;
   name:string;
   path:string;
   size:string;
   url:string;
   save:() => number;
   getContents:() => string;
}

export declare enum Type {
   AUTOCAD,
   BMPIMAGE,
   CSV,
   EXCEL,
   FLASH,
   FREEMARKER,
   GIFIMAGE,
   GZIP,
   HTMLDOC,
   ICON,
   JAVASCRIPT,
   JPGIMAGE,
   JSON,
   MESSAGERFC,
   MP3,
   MPEGMOVIE,
   MSPROJECT,
   PDF,
   PJPGIMAGE,
   PLAINTEXT,
   PNGIMAGE,
   POSTSCRIPT,
   POWERPOINT,
   QUICKTIME,
   RTF,
   SMS,
   STYLESHEET,
   TAR,
   TIFFIMAGE,
   VISIO,
   WEBAPPPAGE,
   WEBAPPSCRIPT,
   WORD,
   XMLDOC,
   XSD,
   ZIP
}

/**
 * Enumeration that holds the string values for supported character encoding.
 */
export declare enum FileEncoding {
   UTF8,
   WINDOWS_1252,
   ISO_8859_1,
   GB18030,
   SHIFT_JIS,
   MAC_ROMAN,
   GB2312,
   BIG5
}

interface FileLoadOptions {
   /**
    * Internal ID of the file as a number or a string, OR  The relative file path to the file in the file cabinet.
    */
   id:(number|string);
}

interface FileDeleteOptions {
   /**
    * Internal ID of the file.
    */
   id:(number|string);
}

interface FileCreateOptions {
   /**
    * The file name.
    */
   name:string
   /**
    * The file type.
    */
   fileType: Type
   /**
    * The file content.
    */
   contents:string
   /**
    * The internal ID of the folder used when the file is saved.
    */
   folder?:number
}

/**
 * Method used to create a new file in the NetSuite file cabinet.
 */
export declare function create(options:FileCreateOptions):NSFile
/**
 * Method used to delete an existing file from the NetSuite file cabinet.
 */
//export declare var delete : (options:FileDeleteOptions) => void
/**
 * Method used to load an existing file from the NetSuite file cabinet.
 */
export declare function load(options:FileLoadOptions):NSFile



