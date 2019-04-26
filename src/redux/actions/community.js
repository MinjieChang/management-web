import { ENDPOINT, ACTION } from 'src/constants'
import { message } from 'antd'
import { sleep } from 'src/util'

export const namespace = 'GET_TALKS'

export function getTalks() {
    return {
        namespace,
        promise: ajax => ajax.get(ENDPOINT.COMMUNITY.GET_TALKS),
        onSuccess: (dispatch, getState, response) => {
            const { data } = response
            dispatch({
                type: ACTION.COMMUNITY.SET_TALKS,
                payload: data.talks,
            })
        },
    }
}

export function submitTalks(payload) {
    return {
        promise: ajax => ajax.post(ENDPOINT.COMMUNITY.SUBMIT_TALKS, payload),
        onSuccess: (dispatch, getState, response) => {
            const { data } = response
            console.log(data, 'submit')
            // dispatch({
            //     type: ACTION.COMMUNITY.SET_TALKS,
            //     payload: data.talks,
            // })
        },
    }
}
