import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            show: false
        }

        this.handlePressClick = this.handlePressClick.bind(this)
    }

    increase() {
        this.setState({
            value: ++this.state.value
        })
    }

    showMessage() {
        this.setState({
            show: !this.state.show
        })
    }

    handlePressClick(event, type = null) {
        event.preventDefault()
        this.increase()
        this.showMessage()

        console.log(event, type)
    }

    render () {
        return (
            <div>
                <div>
                    Value is: {this.state.value}
                </div>

                <div>show is: {this.state.show ? 'true' : 'false'}</div>

                <div onClick={this.handlePressClick}>Press here to increase</div>

                <button onClick={() => console.log('1234567')}>Click me!</button>

                {/* <div onClick={(e) => this.handlePressClick(e, '123')}>Press here to increase</div> */}
            </div>
        )
    }
}

export default Counter;


// function name(e) {
//     this.handlePressClick(e, '123')
// }