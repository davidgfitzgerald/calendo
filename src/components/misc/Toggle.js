import React from 'react'


class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isOn: true, name: null };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(name, event) {
        console.log(event)
        this.setState((oldState) => ({
            isOn: !oldState.isOn,
            name: name
        })
        )
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick("- David interacted", e)}>
                {this.state.isOn ? 'ON' : 'OFF'} {this.state.name}
            </button>
        )
    }
}

export default Toggle;