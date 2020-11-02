import {connect} from 'react-redux';
import App from './app';
import { receiveLoad } from '../actions/loadActions';

const MDTP = dispatch => ({
    receiveLoad: (load) => dispatch(receiveLoad(load)),
    test: () => console.log("testing")
});

export default connect(null, MDTP)(App);