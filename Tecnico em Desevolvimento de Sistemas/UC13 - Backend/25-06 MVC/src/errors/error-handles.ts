export class AppError extends Error {
    public statusCode: number
    public isOperation: boolean

    constructor(message: string, statusCode: number) {
        super(message)                    
        this.statusCode = statusCode
        this.isOperation = true
    }
}