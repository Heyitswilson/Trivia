const axios = require('axios');

export const fetchQuestion = () => {
    return axios.get('/home')
    // axios.get('/home')
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err))
}  