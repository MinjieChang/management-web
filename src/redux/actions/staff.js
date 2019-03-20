import { ENDPOINT, ACTION } from 'src/constants'
import { message } from 'antd'
import { sleep } from 'src/util'

export const namespace = 'GET_STAFF'
export const GET_STAFF_REQUEST = `${namespace}_REQUEST`
export const GET_STAFF_SUCCESS = `${namespace}_SUCCESS`
export const GET_STAFF_FAIL = `${namespace}_FAIL`

export function getStaffs() {
    return async (dispatch, getState, { fetch, history, ajax }) => {
        // const r = await fetch(ENDPOINT.STAFF.GET_STAFF)
        const response = await ajax.get(ENDPOINT.STAFF.GET_STAFF)
        const { data } = response
        dispatch({
            type: ACTION.STAFF.SET_STAFF,
            payload: data.staffs,
        })
    }
}

export function addStaffs(payload) {
    return async (dispatch, getState, { ajax }) => {
        const { data, errorCode } = await ajax.post(ENDPOINT.STAFF.ADD_STAFF, payload)
        if (data) {
            getStaffs()
            message.success('添加成功')
        } else {
            message.error(errorCode)
        }
        return { done: true }
    }
}

export function getStaffs2() {
    return {
        types: [GET_STAFF_REQUEST, GET_STAFF_SUCCESS, GET_STAFF_FAIL],
        promise: client => client.get(ENDPOINT.STAFF.GET_STAFF),
        onSuccess: (dispatch, getState, response) => {
            /* 请求成功后执行的函数 */
            const { data } = response
            dispatch({
                type: ACTION.STAFF.SET_STAFF,
                payload: data.data.staffs,
            })
        },
    }
}
