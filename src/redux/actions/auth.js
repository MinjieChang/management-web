import { ENDPOINT, ACTION } from 'src/constants'
import history from 'src/util/history'
import { sleep } from 'src/util/index'
import { message } from 'antd'

export const namespace = 'register'

export function register(payload) {
    return {
        namespace,
        promise: ajax => ajax.post(ENDPOINT.AUTH.REGISTER, payload),
        onSuccess: (dispatch, getState, response) => {
            const { data } = response
            if (data) {
                message.success('注册成功')
                return sleep(1200).then(() => history.push('/auth'))
            }
        },
    }
}

export function login(payload) {
    return {
        promise: ajax => ajax.post(ENDPOINT.AUTH.LOGIN, payload),
        onSuccess: (dispatch, getState, response) => {
            const { data } = response
            if (data) {
                message.success('登陆成功')
                dispatch({
                    type: ACTION.AUTH.SET_ACCOUNT,
                    payload: data,
                })
                return sleep(1200).then(() => history.push('/'))
            }
        },
    }
}
