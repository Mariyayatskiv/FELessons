import Title from "./Title";

function NewsItemFunc(props) {
    return (
        <div>
            <Title title={props.title} desc={props.desc}/>
            <p>{props.text}</p>
        </div>
    )
}

export default NewsItemFunc;