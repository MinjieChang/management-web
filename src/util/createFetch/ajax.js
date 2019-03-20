import qs from 'query-string'
import HttpRequest from './httpRequest'

class AJAX {
    constructor() {}

    get = (url, query, ...options) => {
        // 拼接url地址
        const queryUrl = this.stringifyQuery(url, query)
        // 设置请求头

        // 获取请求函数
        const requestInstance = new HttpRequest(queryUrl)
        return requestInstance.get()
    }

    post = (url, body, ...options) => {
        const requestInstance = new HttpRequest(url)
        return requestInstance.post(body)
    }

    put = (url, body, ...options) => {
        const requestInstance = new HttpRequest(url)
        return requestInstance.put(body)
    }

    stringifyQuery = (url, query) => {
        const queryString = qs.stringify(query)
        // 判断url是否有 ？ 号
        if (url.indexOf('?') !== -1) {
            // 判断 ？ 是否为最后一个字符
            return url.slice(-1) === '?'
                ? `${url}${queryString}`
                : `${url}&${queryString}`
        }

        return `${url}?${queryString ? queryString : ''}`
    }
}

export default new AJAX()
