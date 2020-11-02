import { RECEIVE_LOAD } from '../actions/loadActions';

const loadReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LOAD: 
            return action.load;
        default:
            return state
    }
}

export default loadReducer;