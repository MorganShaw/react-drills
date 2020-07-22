import React from "react";

class Display extends React.Component {
    constructor(){
        super();

        this.state = {
            inputValue: ''
        }
    }

    changeInput(event) {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <div>
            <input 
                type="text" 
                value={this.state.inputValue}
                placeholder="type something"
                onChange={(e) => this.changeInput(e)}/>
            </div>
        )
    }
}

export default Display