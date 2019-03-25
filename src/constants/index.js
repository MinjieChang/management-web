export const ACTION = {
    STAFF: {
        GET_STAFFS: 'STAFF/GET_STAFFS',
        SET_STAFFS: 'STAFF/SET_STAFFS',
        SET_STAFF_INFO: 'STAFF/SET_STAFF_INFO',
    },
    LODING: {
        LODING_STATE: 'LODING/LODING_STATE',
    },
}

export const ENDPOINT = {
    STAFF: {
        GET_STAFFS: 'api/staff/getStaffs',
        ADD_STAFF: 'api/staff/add',
        DEL_STAFF: 'api/staff/del',
        GET_STAFF_INFO: 'api/staff/getStaffInfo',
        EDIT_STAFF: 'api/staff/update',
        BATCH_DELETE_STAFFS: 'api/staff/batchDelByIds',
    },
}

export const ERROR_MESSAGE = {
    INVALID_ACCOUNT_OR_PASSWORD: '账号或密码不正确',
    FORBIDDEN: '你没有权限',
    INVALID_PARAM: '无效参数，请稍后重试',
    INVALID_TOKEN: '登录无效',
    INVALID_PASSCODE: 'passcode错误',
    PRISTINE_PASSWORD_ERROR: '请更改初始密码',
    DUP: '该资源已存在',
    NO_MEETING: '会议还未开始',
    NO_HOST: '主持人必须在线',
    CONSTRAINT_ERROR: '操作前请删除该资源下的所有资源',
    SERVER_ERROR: '服务器错误',
    UNKNOWN: '未知错误，请联系管理员',
    TOKEN_KICKED_OUT: '账号失效，请重新登陆',

    // 自定义错误
    CONSTRAINT_ERROR_DELETE_CONFE: '该账号下存在会议，无法删除！',
    CONSTRAINT_ERROR_DELETE_CONTRACT: '该合同下存在账号，无法删除！',
    NETWORK_TIMEOUT: '请求超时, 请稍后再试',
}
