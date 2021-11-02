import { Logger } from './logger/indexlogger';

export class App {
    public static logger = new Logger();
    
    private static instance: App;
    
    static getInstance(): App {
        if (!App.instance) {
            App.instance = new App();
        }
        return App.instance;
    }

    run(): void {
        App.logger.init();
    }
}
