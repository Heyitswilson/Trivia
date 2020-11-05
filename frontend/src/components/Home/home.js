import React, {useState, useEffect} from 'react';
// import {receiveQuestion} from '../../actions/loadActions';


const Home = (props) => {

    useEffect(() => {
        props.receiveQuestion()
    }, [])


    const emptyChoices = () => {
        return <div>loading</div>
    }

    const renderChoices = () => {
        return (
            <div>
                {props.load.data[0].incorrect.map(choice => {        
                    return (
                        <div>{choice}</div>
                    )
                })}
            </div>
        )
     }


    return !props.load.data ? emptyChoices() : renderChoices()
}




export default Home