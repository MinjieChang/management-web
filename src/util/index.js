import { compact } from 'lodash'

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
