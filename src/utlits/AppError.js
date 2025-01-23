class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;

        // Capture stack trace (optional)
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;