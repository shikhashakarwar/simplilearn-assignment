import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import getAppReducer from './reducers/appReducer';

export default function configureStore() {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const reducers = getAppReducer();
    
    return createStore(
        reducers,
        composeEnhancer(
            applyMiddleware(thunk)
        )
    )
}