/* eslint-disable no-underscore-dangle */
import { ACTION } from 'src/constants'

const initState = {
    talks: [],
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case ACTION.STAFF.SET_TALKS:
            return {
                ...state,
                talks: payload,
            }
        default:
            return state
    }
}
