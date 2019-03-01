
/**
* Specifies the available logging levels.
*/
export declare interface LogLevel {
  
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
  
  /**
    * Additional log levels defined at runtime.
    */
  [level: string]: number;
}

/**
* Implemented by classes which wish to append log data to a target data store.
*/
export declare interface Appender {
  
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
export declare const logLevel: LogLevel;

/**
* Gets the instance of a logger associated with a particular id (or creates one if it doesn't already exist).
*
* @param id The id of the logger you wish to get an instance of.
* @return The instance of the logger, or creates a new logger if none exists for that id.
*/
export declare function getLogger(id: string): Logger;

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
export declare function addAppender(appender: Appender): void;

/**
* Removes an appender.
* @param appender An appender that has been added previously.
*/
export declare function removeAppender(appender: Appender): void;

/**
 * Gets an array of all appenders.
 */
export declare function getAppenders(): any;

/**
 * Removes all appenders.
 */
export declare function clearAppenders(): void;

/**
 * Adds a custom log level that will be added as an additional method to Logger.
 * Logger will call the corresponding method on any appenders that support it.
 *
 * @param name The name for the new log level.
 * @param value The numeric severity value for the level (higher is more severe).
 */
export declare function addCustomLevel(name: string, value: number): void;

/**
 * Removes a custom log level.
 * @param name The name of a custom log level that has been added previously.
 */
export declare function removeCustomLevel(name: string): void;

/**
* Sets the level of logging for ALL the application loggers.
*
* @param level Matches a value of logLevel specifying the level of logging.
*/
export declare function setLevel(level: number): void;

/**
* Gets the level of logging of ALL the application loggers.
*
* @return The logLevel value used in all loggers.
*/
export declare function getLevel(): number;

/**
* A logger logs messages to a set of appenders, depending on the log level that is set.
*/
export declare class Logger {
  
  /**
    * The id that the logger was created with.
    */
  id: string;
  
  /**
     * The logging severity level for this logger
     */
  level: number;
  
  /**
    * You cannot instantiate the logger directly - you must use the getLogger method instead.
    */
  constructor(id: string);
  
  /**
     * Logs a debug message.
     *
     * @param message The message to log.
     * @param rest The data to log.
     */
  debug(message: string, ...rest: any[]): void;
  
  /**
     * Logs info.
     *
     * @param message The message to log.
     * @param rest The data to log.
     */
  info(message: string, ...rest: any[]): void;
  
  /**
     * Logs a warning.
     *
     * @param message The message to log.
     * @param rest The data to log.
     */
  warn(message: string, ...rest: any[]): void;
  
  /**
     * Logs an error.
     *
     * @param message The message to log.
     * @param rest The data to log.
     */
  error(message: string, ...rest: any[]): void;
  
  /**
     * Sets the level of logging for this logger instance
     *
     * @param level Matches a value of logLevel specifying the level of logging.
     */
  setLevel(level: number): void;
  
  /**
     * Returns if the logger is in debug mode or not.
     */
  isDebugEnabled(): boolean;
}