export class AppError extends Error {
  statusCode: number

  constructor(message: string, statusCode: number = 500) {
    super(message)
    this.name = this.constructor.name
    this.statusCode = statusCode
    // This is necessary to restore the prototype chain
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, AppError.prototype)
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, 404)
    this.name = 'NotFoundError'
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }
}

export class LoginError extends AppError {
  constructor(message: string = 'Incorrect email or password') {
    super(message, 401)
    this.name = 'LoginError'
    Object.setPrototypeOf(this, LoginError.prototype)
  }
}

export class ServerError extends AppError {
  constructor(message: string = 'Internal server error') {
    super(message, 500)
    this.name = 'ServerError'
    Object.setPrototypeOf(this, ServerError.prototype)
  }
}
