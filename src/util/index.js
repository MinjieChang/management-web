import { compact, isEmpty } from 'lodash'

export function merge(classes) {
    return compact(classes).join(' ')
}

export function click(fn, param) {
    return event => {
        event.preventDefault()
        event.stopPropagation()
        fn(param)
    }
}

export function enterKey(fn, param) {
    if (!fn) {
        return null
    }
    return event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            event.stopPropagation()
            fn(param)
        }
    }
}

export function sleep(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    })
}

export function inherits(Child, Father) {
    function Middle() {}
    Middle.prototype = Father.prototype
    const midInstance = new Middle()
    /* eslint-disable-next-line */
    Child.prototype = midInstance
    midInstance.constructor = Child
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object, Object]'
}

export function isValidObject(obj) {
    if (!isObject(obj)) return false
    return Object.keys(obj).length > 0
}

export function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object, Array]'
}

export function isValidArray(arr) {
    if (!isArray(arr)) return false
    return !isEmpty(arr)
}
