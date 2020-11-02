import {connect} from 'react-redux';
import {receiveQuestion} from '../../actions/loadActions';
import Home from './home';

const MSTP = state => ({
    load: state.load
})

const MDTP = (dispatch) => ({
    receiveQuestion: () => dispatch(receiveQuestion())
})

export default connect(MSTP, MDTP)(Home)