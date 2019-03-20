export default class ClientError extends Error {
    constructor({ errorCode, errorMessage }) {
        super()
        this.errorCode = errorCode
        this.errorMessage = errorMessage
    }
}
