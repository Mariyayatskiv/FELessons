import React from 'react';

class NewsItemClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            titleBig: this.props.title,
            space: '1',
            isSpanClicked: false
        }

        // console.log(this.state.titleBig)
        // console.log(this.state.space)

        // this.state.space = '2'
    }

    handleClick() {
        this.setState({
            space: '2'
        })

        // console.log(this.state.space)
    }

    spanClicked() {
        this.setState({
            isSpanClicked: !this.state.isSpanClicked
        })

        console.log('Here', this.state.isSpanClicked)
    }

    render() {
        return (
            <div>
                {/* comment */}
                <h3 onClick={() => this.handleClick()}>{this.state.titleBig} {this.state.space}</h3>
                <p>{this.props.text}</p>
                <span onClick={() => this.spanClicked()}>Click here! ({this.state.isSpanClicked ? 'true' : 'false'})</span>
            </div>
        )
    }
}

export default NewsItemClass;


// NewsItemClass({title: "Title", text: "text"})

// function NewsItemClass(props) {
//     let arr = [],
//         name = ''

//         let password = '123'
// }