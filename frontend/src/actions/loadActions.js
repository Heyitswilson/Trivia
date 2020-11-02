import { fetchQuestion } from '../util/loadUtil';
export const RECEIVE_LOAD = "RECEIVE_LOAD";


export const receiveLoad = (load) => ({
    type: RECEIVE_LOAD,
    load
})

// export const receiveQuestion = () => (
//     console.log("FA:LJFSLKHJ")
    
// )

export const receiveQuestion = () => dispatch => {
    // console.log("receiving")
    fetchQuestion()
        .then(res => {
            // console.log("receiveQuestion")
            dispatch(receiveLoad(res.data))
        })
        .catch(err => console.log(err))
}