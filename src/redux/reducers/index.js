import { combineReducers } from 'redux'
import staff from './staff'
import loading from './loading'

export default combineReducers({
    staff,
    loading,
})
