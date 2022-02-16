export declare function optionalLoggerFactory(config?: OptionalLogConfig): Logger;
export interface Logger {
    info: (...args: any) => void;
    error: (...args: any) => void;
    warn: (...args: any) => void;
}
export interface OptionalLogConfig {
    enabled?: boolean;
    useNodeEnv?: boolean;
}
