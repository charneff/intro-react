import React, { Component } from 'react'
import ChildComp from './ChildComp'
import { FavoriteLang } from './FavoriteLang'

class Comp extends Component {
    render() {
        return (
            <div>
                <h4>some text in the Comp component</h4>
                {this.props.someProp}
                <FavoriteLang language="Javascript"/>
                <ChildComp compText={"THis is some text from Comp.js"} anotherProp="I am a from also from Comp"/>
            </div>
        )
    }
}

export default Comp
