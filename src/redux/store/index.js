import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import promiseMiddleware from './middleware/promiseMiddleware';
import createFetch from 'src/util/createFetch';

const clientFetch = createFetch(fetch, {
    getDispatch: () => store.dispatch,
    baseUrl: '',
});

let store = createStore(
    reducers,
    applyMiddleware(
        ...[
            thunkMiddleware.withExtraArgument({ fetch: clientFetch }),
            promiseMiddleware,
        ],
    ),
);

if (module.hot) {
    module.hot.accept('../reducers', () => {
        const nextCombineReducers = require('../reducers').default;
        store.replaceReducer(nextCombineReducers);
    });
}

export default store;
