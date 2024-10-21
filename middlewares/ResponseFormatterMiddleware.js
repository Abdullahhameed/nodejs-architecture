const responseFormatter = (req, res, next) => {
    res.success = (statusCode, data, metadata = {}, links = {}) => {
        res.status(statusCode).json({
            status: 'success',
            statusCode: statusCode,
            data,
            metadata,
            links
        });
    };

    res.error = (message, statusCode = 500, details = {}) => {
        res.status(statusCode).json({
            status: 'error',
            statusCode,
            error: {
                statusCode,
                message,
                details
            },
            metadata: {
                timestamp: new Date().toISOString(),
            }
        });
    };
    next();
};
export default responseFormatter