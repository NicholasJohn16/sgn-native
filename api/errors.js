// 400
export class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BadRequestError'; 
    }
}

// 401
export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedError';
    }
}

// 403
export class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ForbiddenError';
    }
}

// 404
export class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
    }
}

// 405
export class MethodNotAllowed extends Error {
    constructor(message) {
        super(message);
        this.name = 'MethodNotAllowedError';
    }
}