import { combineReducers } from 'redux'
import loading from './loading'
import staff from './staff'
import community from './community'

export default combineReducers({
    staff,
    loading,
    community,
})
