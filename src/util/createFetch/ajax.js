import qs from 'query-string'
import requestInstance from './httpRequest'

class AJAX {
    get = (url, query, options) => {
        // 拼接url地址
        const queryUrl = this.stringifyQuery(url, query, options)
        // 设置请求头
        return requestInstance.get(queryUrl)
    }

    post = (url, body, options) => {
        return requestInstance.post(url, body, options)
    }

    delete = (url, body, options) => {
        return requestInstance.delete(url, body, options)
    }

    put = (url, body, options) => {
        return requestInstance.put(url, body, options)
    }

    stringifyQuery = (url, query) => {
        const queryString = qs.stringify(query)
        // 判断url是否有 ？ 号
        if (url.indexOf('?') !== -1) {
            // 判断 ？ 是否为最后一个字符
            return url.slice(-1) === '?' ? `${url}${queryString}` : `${url}&${queryString}`
        }

        return `${url}?${queryString || ''}`
    }
}

export default new AJAX()
