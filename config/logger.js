import { createLogger, format, transports } from "winston";

export const logger = createLogger({
    transports: [
        new transports.File({
            level: process.env.LOG_LEVEL || 'info',
            filename: './logs/info.log'
        }),
        // new transports.Console(),
        // new transports.File({
        //     level: 'warn',
        //     filename: './logs/warning.log'
        // }),
    ],
    format:  format.combine(
        format.timestamp(),
        format.json(),
        format.metadata(),
        format.prettyPrint()
    )
});