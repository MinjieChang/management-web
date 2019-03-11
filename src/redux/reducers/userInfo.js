import { GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL } from 'actions/userInfo'

const initState = {
	isLoading: false,
	userInfo: {},
	errorMsg: ''
}

export default function reducer(
	state = initState,
	{ type, payload: { result, error, ...rest } = {} }
) {
	switch (type) {
		case GET_USER_INFO_REQUEST:
			return {
				...state,
				isLoading: true,
				userInfo: {},
				errorMsg: ''
			}
		case GET_USER_INFO_SUCCESS:
			return {
				...state,
				isLoading: false,
				userInfo: result,
				errorMsg: ''
			}
		case GET_USER_INFO_FAIL:
			return {
				...state,
				isLoading: false,
				userInfo: {},
				errorMsg: '请求错误'
			}
		default:
			return state
	}
}
