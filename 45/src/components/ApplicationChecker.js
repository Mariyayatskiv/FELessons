import React from 'react';
import moment from 'moment';

class ApplicationChecker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isDay: this.props.date ? (moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date) ? 'past' : 'future') : null
        }
    }

    render() {
        // first method
        // let isDay = null;
        // if(moment().isSame(this.props.date, 'minute')) {
        //     isDay = 'today'
        // } else if(moment().isBefore(this.props.date)) {
        //     isDay = 'past'
        // } else {
        //     isDay = 'future'
        // }

        // return (
        //     <div>{isDay === 'today' ? 'Today!' : isDay === 'past' ? 'Past!' : 'Future!'}</div>
        // )


        // second method
        // const isDay = moment().isSame(this.props.date, 'minute') ? 'today' : moment().isBefore(this.props.date) ? 'past' : 'future';
        // return (
        //     <div>{isDay === 'today' ? 'Today!' : isDay === 'past' ? 'Past!' : 'Future!'}</div>
        // )


        // third method
        // return (
        //     <div>{this.state.isDay === 'today' ? 'Today!' : this.state.isDay === 'past' ? 'Past!' : 'Future!'}</div>
        // )

        // fourth method
        // if(this.state.isDay) {
            // if(!this.state.isDay) {
            //     return <div>Date is not defined</div>
            // }

            if(this.state.isDay === 'today') {
                return <div>Today!</div>
            } else if(this.state.isDay === 'past') {
                return <div>Past!</div>
            } else if(this.state.isDay === 'future') {
                return <div>Future!</div>
            } else {
                return <div>Date is not defined</div>
            }
        // } else {
        //     return <div>Date is not defined</div>
        // }
    }
}

export default ApplicationChecker;