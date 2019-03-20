import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createFetch, ajax } from 'src/util/createFetch'
import reducers from '../reducers'
import promiseMiddleware from './middleware/promiseMiddleware'

const clientFetch = createFetch(fetch, {
    getDispatch: () => store.dispatch,
    baseUrl: '',
})

const store = createStore(
    reducers,
    applyMiddleware(...[thunkMiddleware.withExtraArgument({ fetch: clientFetch, ajax }), promiseMiddleware]),
)

if (module.hot) {
    module.hot.accept('../reducers', () => {
        const nextCombineReducers = require('../reducers').default
        store.replaceReducer(nextCombineReducers)
    })
}

export default store
