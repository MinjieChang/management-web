import { ENDPOINT, ACTION } from 'src/constants'
import { message } from 'antd'
import history from 'src/util/history'
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
        promise: ajax => ajax.post(ENDPOINT.COMMUNITY.SUBMIT_TALK, payload),
        onSuccess: (dispatch, getState, response) => {
            const { data } = response
            if (data) {
                message.success('恭喜，发布成功！')
                sleep(1000).then(() => history.push('/community'))
            }
        },
    }
}

export function deleteTalk(payload) {
    return {
        promise: ajax => ajax.delete(ENDPOINT.COMMUNITY.DELETE_TALK, payload),
        onSuccess: (dispatch, getState, response) => {
            const { data } = response
            if (data) {
                message.success('删除成功！')
                dispatch(getTalks())
            }
        },
    }
}
