initSidebarItems({"constant":[["STATIC_MAX_LEVEL","The statically resolved maximum log level."]],"enum":[["Level","An enum representing the available verbosity levels of the logger."],["LevelFilter","An enum representing the available verbosity level filters of the logger."]],"fn":[["logger","Returns a reference to the logger."],["max_level","Returns the current maximum log level."],["set_boxed_logger","Sets the global logger to a `Box<Log>`."],["set_logger","Sets the global logger to a `&'static Log`."],["set_logger_racy","A thread-unsafe version of `set_logger`."],["set_max_level","Sets the global maximum log level."]],"macro":[["as_debug","Get a value from a type implementing `std::fmt::Debug`."],["as_display","Get a value from a type implementing `std::fmt::Display`."],["debug","Logs a message at the debug level."],["error","Logs a message at the error level."],["info","Logs a message at the info level."],["log","The standard logging macro."],["log_enabled","Determines if a message logged at the specified level in that module will be logged."],["trace","Logs a message at the trace level."],["warn","Logs a message at the warn level."]],"mod":[["kv","UNSTABLE: Structured key-value pairs."]],"struct":[["Metadata","Metadata about a log message."],["MetadataBuilder","Builder for `Metadata`."],["ParseLevelError","The type returned by `from_str` when the string doesn’t match any of the log levels."],["Record","The “payload” of a log message."],["RecordBuilder","Builder for `Record`."],["SetLoggerError","The type returned by `set_logger` if `set_logger` has already been called."]],"trait":[["Log","A trait encapsulating the operations required of a logger."]]});