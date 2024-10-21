import expressWinston from 'express-winston';
import { transports, format } from 'winston';
import v1Route from './api/v1/index.js';
import v2Route from './api/v2/index.js';
import { Router } from "express";

const router = Router();
router.use("/api/v1", v1Route);
router.use("/api/v2", v2Route);

// Error handling
router.use((err, req, res, next) => {
    res.error('Something broke!', err?.statusCode, err?.message);
    throw new Error(err);
});

const myFormat = format.printf(({ level, meta, timestamp }) => {
    return `{ 
      'timestamp' => ${timestamp} 
      '${level}' =>    ${meta.message} 
  }`;
})

router.use(expressWinston.errorLogger({
    transports: [
        new transports.File({
            filename: 'logs/error.log'
        })
    ],
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint(),
        myFormat
    )
}))

// End Error handling
export default router;