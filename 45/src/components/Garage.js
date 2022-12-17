import React from 'react';
import Car from './Car.js';

export default class Garage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            space: '1',
            show: false
        }
    }

    componentDidMount() {
        this.setState({
            show: true
        })

        // resize
    }

    componentDidUpdate(prevProps) {
        if(JSON.stringify(prevProps.cars) !== JSON.stringify(this.props.cars)) {
            // fetch data
        }
        // if(this.props.page !== prevProps.page)
    }

    componentWillUnmount() {
        //  remove resize
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        // if(this.props.cars.length) {
            return (
                <div>
                    <h2>Garage</h2>
                    {/* {this.props.cars.length ? <div>You have {this.props.cars.length} cars</div> : <div>You don't have cars</div>} */}
                    {this.props.cars.length > 0 && <div>You have {this.props.cars.length} cars</div>}

                    {this.props.cars.map((car, index) => <Car key={index} name={car.name} speed={car.speed} index={index}/>)}

                    {this.props.cars.map((car, index) => 
                        <div key={index}>
                            <div>
                                <h3>{index + 1}. Car: {car.name}</h3>
                                <p>Speed is {car.speed} km per hour</p>
                            </div>
                        </div>)}
                </div>
            ) 
        // } else {
        //     return (
        //         <div>
        //             <h2>Garage</h2>
        //             <div>You don't have cars</div>
        //         </div>
        //     ) 
        // }
    }
};