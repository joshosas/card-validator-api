/**
 * Custom application error class
 */
export class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Maintain proper stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}
