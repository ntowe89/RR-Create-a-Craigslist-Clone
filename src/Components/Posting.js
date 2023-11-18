function Posting(props) {
    
    return (
        <div className="posting">
            <img src={props.posting.imageURL} alt={props.posting.title} />
            <h1>{props.posting.title}</h1>
            <p>{props.posting.description}</p>
            <p>{props.posting.price}</p>
        </div>
    )
}

export default Posting