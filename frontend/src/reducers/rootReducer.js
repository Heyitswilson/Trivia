import {combineReducers} from 'redux';
import loadReducer from './loadReducer'

const RootReducer = combineReducers({
    load: loadReducer
})

// const RootReducer = () => ({
//     test: "Hello"
// })

export default RootReducer;