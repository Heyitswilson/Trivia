import React, {useState, useEffect} from 'react';
// import {receiveQuestion} from '../../actions/loadActions';


const Home = (props) => {


    useEffect(() => {
        props.receiveQuestion()
    }, [])
    // receiveQuestion()

    const choices = () => {
        // console.log(props.load.data[0].incorrect)
        let choices = [];
        let incorrect; 
        
        if (props.load.data) {
            incorrect = props.load.data[0].incorrect;
            
            for(let i = 0; i < incorrect.length; i += 1) {
                // console.log(props.load)
                let choice = incorrect[i]
                choices.push(
                    <div>
                        <label>`${choice}`</label>
                    </div>
                )
            }
        }

        return choices
    }

    const renderChoices = () => {
        if (props.load.data) {

            props.load.data[0].incorrect.map(choice => {
                return (
                    <div>
                        <label>`${choice}`</label>
                    </div>
                )
            })
        }
    }


    return (
        <div>
            Home Page
            {renderChoices()}
            
            
        </div>
    )
}

export default Home