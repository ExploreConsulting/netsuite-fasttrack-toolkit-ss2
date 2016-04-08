
  
  /**
  * Specifies the available logging levels.
  */
  export interface LogLevel {
    
    /**
      * No logging.
      */
    none: number;
    
    /**
      * Log only error messages.
      */
    error: number;
    
    /**
      * Log warnings messages or above.
      */
    warn: number;
    
    /**
      * Log informational messages or above.
      */
    info: number;
    
    /**
      * Log all messages.
      */
    debug: number;
  }
  
  /**
  * Implemented by classes which wish to append log data to a target data store.
  */
  export interface Appender {
    
    /**
      * Appends a debug log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    debug(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends an info log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    info(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends a warning log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    warn(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends an error log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    error(logger: Logger, ...rest: any[]): void;
  }
  
  /**
  * Specifies the available logging levels.
  */
  /**
  * Specifies the available logging levels.
  */
  export const logLevel: LogLevel;
  
  /**
  * Gets the instance of a logger associated with a particular id (or creates one if it doesn't already exist).
  *
  * @param id The id of the logger you wish to get an instance of.
  * @return The instance of the logger, or creates a new logger if none exists for that id.
  */
  export function getLogger(id: string): Logger;
  
  /**
  * Adds an appender capable of processing logs and channeling them to an output.
  *
  * @param appender An appender instance to begin processing logs with.
  */
  /**
  * Adds an appender capable of processing logs and channeling them to an output.
  *
  * @param appender An appender instance to begin processing logs with.
  */
  export function addAppender(appender: Appender): void;
  
  /**
  * Sets the level of logging for ALL the application loggers.
  *
  * @param level Matches a value of logLevel specifying the level of logging.
  */
  export function setLevel(level: number): void;
  
  /**
  * A logger logs messages to a set of appenders, depending on the log level that is set.
  */
  export class Logger {
    
    /**
      * The id that the logger was created with.
      */
    id: string;
    
    /**
       * The logging severity level for this logger
       */
    currentLevel: number;
    
    /**
      * You cannot instantiate the logger directly - you must use the getLogger method instead.
      */
    constructor(id: string, key: Object);
    
    /**
       * Logs a debug message.
       *
       * @param args the data to log
       */
    debug(...args: any[]): void;
    
    /**
       * Logs info.
       *
       * @param args the data to log
       */
    info(...args: any[]): void;
    
    /**
       * Logs a warning.
       *
       * @param args the data to log
       */
    warn(...args: any[]): void;
    
    /**
       * Logs an error.
       *
       * @param args the data to log
       */
    error(...args: any[]): void;
    
    /**
       * Sets the level of logging this logger
       *
       * @param level Matches a value of logLevel specifying the level of logging.
       */
    setLevel(level: number): void;
  }
