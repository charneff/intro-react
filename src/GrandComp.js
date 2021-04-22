import React from 'react'
import { FavoriteLang } from './FavoriteLang'

 function GrandComp(props) {
    return (
        <>
            <li>Inside of GrandComp - {props.name} <FavoriteLang language={"Ruby"} /><br></br><button onClick={props.handleOnClick}>Click Me</button></li>
        </>
    )
}

export default GrandComp
