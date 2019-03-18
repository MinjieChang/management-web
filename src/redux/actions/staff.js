import { ENDPOINT, ACTION } from 'src/constants'
import { sleep } from 'src/util'

export const namespace = 'GET_STAFF'
export const GET_STAFF_REQUEST = `${namespace}_REQUEST`
export const GET_STAFF_SUCCESS = `${namespace}_SUCCESS`
export const GET_STAFF_FAIL = `${namespace}_FAIL`

export function getStaffs2() {
    return async (dispatch, getState, { fetch, history }) => {
        const r = await fetch(ENDPOINT.STAFF.GET_STAFF)
        console.log(r, 'rrrrrrr')
    }
}

export function getStaffs() {
    return {
        types: [GET_STAFF_REQUEST, GET_STAFF_SUCCESS, GET_STAFF_FAIL],
        promise: client => client.get(ENDPOINT.STAFF.GET_STAFF),
        onSuccess: (dispatch, getState, response) => {
            /*请求成功后执行的函数*/
            const { data } = response
            dispatch({
                type: ACTION.STAFF.SET_STAFF,
                payload: data.data.staffs,
            })
        },
    }
}
