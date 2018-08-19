import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from '../reducers';


export default function configureStore() {
    
    let middleware = applyMiddleware(thunk, logger);

    if (process.env.NODE_ENV !== 'production') {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
          middleware = compose(middleware, devToolsExtension());
        }
    }

    const store = createStore( reducers, middleware )
    return store;
}
