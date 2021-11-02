import { Tracer, colorConsole } from 'tracer';

export class Logger {
    private logger: Tracer.Logger | undefined;

    init(): void {
        this.logger = colorConsole();
    }

    log(...args: any[]): void {
        this.logger!.log(...args);
    }

    trace(...args: any[]): void {
        this.logger!.trace(...args);
    }

    debug(...args: any[]): void {
        this.logger!.debug(...args);
    }

    info(...args: any[]): void {
        this.logger!.info(...args);
    }

    warn(...args: any[]): void {
        this.logger!.warn(...args);
    }

    error(...args: any[]): void {
        this.logger!.error(...args);
    }

    fatal(...args: any[]): void {
        this.logger!.fatal(...args);
    }
}

// function main() {
//     const logger = new Logger();
//     logger.init();
//     logger.log('log');
//     logger.info('info');
//     logger.warn('warning');
//     logger.error('error');
//     logger.fatal('fatal');

// }

// main();