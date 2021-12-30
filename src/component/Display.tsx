import React from 'react';
import { UseUserContext} from './MyContext';
import {IinstialState} from './MyContext'

function DisplayComponent() {

    const {display}=UseUserContext()

    const data:IinstialState=display;
    
    return (
        <div>
            <h1>user Name is <span style={{color:'red'}}>{data.userName}</span></h1>
            <h1>user Location is <span style={{color:'red'}}>{data.userLocation}</span></h1>
        </div>
    )
}

export default DisplayComponent
