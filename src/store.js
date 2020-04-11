import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from './reducers/rootReducer'

export const history = createBrowserHistory()

const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composedEnhancers
    )

    return store
}