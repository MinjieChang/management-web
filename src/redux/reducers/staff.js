/* eslint-disable no-underscore-dangle */
import { ACTION } from 'src/constants'

const initState = {
    staffs: [],
}

export default (state = initState, { type, payload }) => {
    switch (type) {
        case ACTION.STAFF.SET_STAFF:
            return {
                ...state,
                staffs: payload,
            }
        default:
            return state
    }
}
