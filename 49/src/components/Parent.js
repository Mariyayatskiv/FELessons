import React from 'react';
import Child from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            originValue: 1
        }
    }

    changeOriginValue(e) {
        this.setState({
            originValue: e
        })
    }

    render () {
        return (<div>
            <div>
                Doubled value: {this.state.originValue * 2}
            </div>
            <Child 
                origin={this.state.originValue}
                onOriginChange={(e) => this.changeOriginValue(e)}
            />
        </div>)
    }


    // componentDidMount() {
    //     console.log('componentDidMount')
    // }

    // componentDidUpdate(prevProps) {
        // console.log('componentDidUpdate')
    // }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount')
    // }
}

export default Parent