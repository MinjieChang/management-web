import { ENDPOINT, ACTION } from 'src/constants'
import { message } from 'antd'
import { sleep } from 'src/util'

export const namespace = 'GET_TALKS'

export function getTalks() {
    return {
        namespace,
        promise: ajax => ajax.get(ENDPOINT.COMMUNITY.GET_TALKS),
        onSuccess: (dispatch, getState, response) => {
            console.log(response, 99999)
            /* 请求成功后执行的函数 */
            // const { data } = response
            // dispatch({
            //     type: ACTION.COMMUNITY.SET_TALKS,
            //     payload: data.staffs,
            // })
            // return { done: true }
        },
    }
}

export function getStaffs2() {}
