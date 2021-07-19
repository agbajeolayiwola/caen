import React from 'react'
import './style.css'
const Results = ({newdata}) => {
    if(newdata < 0){
        return <h2>Loading</h2>
    }

    return( <ul>
        {newdata.map(newdata=>(
            <li key={newdata.id}>{newdata.login}</li>
            ))}
    </ul>
    )
}

export default Results
