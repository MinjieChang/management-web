import isObject from 'lodash/isObject'
import { message } from 'antd'
import ClientError from './clientError'

class HttpRequest {
    constructor() {
        this.time = 10000
    }

    get = url => {
        const option = this.setOptions({ method: 'get' })
        return this.createFetchFn(url, option)
    }

    post = (url, body) => {
        const option = this.setOptions({
            method: 'post',
            body: isObject(body) ? JSON.stringify(body) : body,
        })
        return this.createFetchFn(url, option)
    }

    delete = (url, body) => {
        const option = this.setOptions({
            method: 'delete',
            body: isObject(body) ? JSON.stringify(body) : body,
        })
        return this.createFetchFn(url, option)
    }

    put = (url, body) => {
        const option = this.setOptions({
            method: 'put',
            body: isObject(body) ? JSON.stringify(body) : body,
        })
        return this.createFetchFn(url, option)
    }

    setOptions = (option, baseUrl = '') => {
        const options = {
            mode: baseUrl ? 'cors' : 'same-origin',
            credentials: baseUrl ? 'include' : 'same-origin',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // ...(cookie ? { Cookie: cookie } : null),
            },
        }
        return Object.assign({}, options, option)
    }

    checkHttpStatus = response => {
        if (response.status >= 200 && response.status < 300) {
            return response
        }

        if (response.status >= 400 && response.status < 500) {
            return response
        }

        const error = new ClientError({ errorCode: 'SERVER_ERROR' })
        throw error
    }

    checkAuthority = response => {
        const hasAuth = response.errorCode === 'TOKEN_KICKED_OUT' || response.errorCode === 'FORBIDDEN'
        if (hasAuth) {
            message.warning('登录无效')
        }
        return response
    }

    createFetchFn = async (url, options) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject(new ClientError({ errorCode: 'NETWORK_TIMEOUT' })), this.time)
            fetch(url, options)
                .then(response => this.checkHttpStatus(response))
                .then(response => response.json())
                .then(response => this.checkAuthority(response))
                .then(response => resolve(response))
                .catch(err => () => reject(err))
        }).catch(error => {
            console.log(error.errorCode, 'error----errorCode----')
            console.log(error instanceof ClientError, 'error888888')
            message.error(error.errorCode)
            if (error instanceof ClientError) {
                return {
                    errorCode: error.errorCode,
                    errorMessage: error.errorMessage,
                }
            }
            return { errorCode: 'UNKNOWN', errorMessage: error.message }
        })
    }
}

export default new HttpRequest()

/**
 *  {
        method: 'POST', // handy with GraphQL backends
        mode: baseUrl ? 'cors' : 'same-origin',
        credentials: baseUrl ? 'include' : 'same-origin',
        body: isObject(body) ? JSON.stringify(body) : body,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(cookie ? { Cookie: cookie } : null),
        },
  */
