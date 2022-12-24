import React from 'react';

class Child extends React.Component {
    handleClick() {
        this.props.onOriginChange(this.props.origin + 1)
    }

    render () {
        return (
            <div>
                <div>
                    Child component
                </div>
                <button onClick={() => this.handleClick()}>
                    Increase value {this.props.origin}
                </button>
            </div>
        )
    }
}

export default Child