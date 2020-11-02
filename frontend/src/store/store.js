import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/rootReducer'

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
    const {logger} = require("redux-logger");
    middlewares.push(logger);
}


export const configureStore = () => (
    createStore(
        RootReducer,
        applyMiddleware(...middlewares)
    )
)

// export default configureStore;