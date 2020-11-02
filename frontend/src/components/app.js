import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomeContainer from './Home/homeContainer';

const App = () => {
    // useEffect(() => {
    //     receiveQuestion();
    // }, [])

    // console.log(props)
    return (
        
        <div>
            <Switch>
                <Route exact path="/home" component={HomeContainer}/>
            </Switch>
        </div>
    )
}

export default App;