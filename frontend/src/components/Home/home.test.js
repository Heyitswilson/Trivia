import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as loadActions from '../../actions/loadActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe('load actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('dispatches RECEIVE_LOAD after a successful API request', () => {
        mock.onGet('/home').reply(200, { response:   {
            "question": "A group of tigers are referred to as:",
            "incorrect": ["Chowder", "Pride", "Destruction"],
            "correct": "Ambush"
          }
        })
        return store.dispatch(loadActions.receiveQuestion())
            .then(() => {
                let expectedActions = [
                    {
                        load: {
                               "question": "A group of tigers are referred to as:",
                                "incorrect": ["Chowder", "Pride", "Destruction"],
                                "correct": "Ambush"
                            },
                            type: 'RECEIVE_LOAD', 
                    }
                ]
                expect(store.getActions()).toEqual(expectedActions)
            })
            .catch((err) => {
                throw new Error(err)
            })
    })
})

// jest.mock('axios');

// it('returns the question data', async () => {
//     axios.get.mockResolvedValue({
//         data: [
//             {
//                 question: "A group of tigers are referred to as:",
//                 incorrect: ["Chowder", "Pride", "Destruction"],
//                 correct: "Ambush"
//             }
//         ]
//     })

//     const data = await receiveQuestion();
//     const question = data[0];
//     console.log('hello')
//     console.log(data())
//     // data is returning the dispatch function
// })




// test that our axios.get is actually fetching data

// test that data.question is equal to the text in header

// test that the question texts are equal to data.incorrect and data.correct

