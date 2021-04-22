import React, { Component } from 'react'
import GrandComp from './GrandComp'

export default class ChildComp extends Component {
    handleClick(){
        console.log("I have been clicked")
    }

    render() {
        const names = ["Charlotte", "Alex", "Jersey", "Sandy", "Reyna", "Marcella", "Ruby"]
        const lis = names.map((name, i) => <GrandComp name={name} key={i} handleOnClick={this.handleClick}/>)
        return (
            <div>
                {lis}
                {this.props.anotherProp}<br></br>
                {this.props.compText}
            </div>
        )
    }
}
