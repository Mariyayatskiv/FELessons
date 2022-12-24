import React from "react";

const fruits = [
    {
        title: 'Apple',
        value: 'apple'
    },
    {
        title: 'Orange',
        value: 'orange'
    },
    {
        title: 'Banana',
        value: 'banana'
    }
]

class FeedBack extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            comment: '',
            fruit: 'banana',
            errors: {
                nameError: '',
                commentError: ''
            },
            persons: []
        }
    }

    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        //   .then(res => {
        //     // this.setState({ persons: res.data });


        //   })
      }

    handleSubmit(event) {
        event.preventDefault();
        
    }

    handleChange(event) {
        console.log(event.target)

        this.setState({
            name: event.target.value
        })


        this.setState({
            errors: {
                nameError: this.state.name.length < 4 ? 'Too short' : ''
            }
        })
    }

    handleCommentChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleFruitChange(event) {
        this.setState({
            fruit: event.target.value
        })
    }

    render () {
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                
                {this.state.errors.nameError.length > 0 && <span>{this.state.errors.nameError}</span>}

                <textarea value={this.state.comment} onChange={(event) => this.handleCommentChange(event)}/>
                {this.state.errors.commentError.length > 0 && <span>{this.state.errors.commentError}</span>}

                <select value={this.state.fruit} onChange={(event) => this.handleFruitChange(event)}>
                    {fruits.map((fruit, index) => <option key={index} value={fruit.value}>{fruit.title}</option>)}
                </select>
                    
                <button type="submit">
                    Send
                </button>
            </form>
        )
    }
}

export default FeedBack;