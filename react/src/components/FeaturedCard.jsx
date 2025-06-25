const FeaturedCard = (props) => {
    return (
        <div className="card">
        <div className="card bg-light">
        <div className="card-text">{props.data}</div>
        <div className="card-text"><a href="#">Click to buy!</a></div>
        </div>
        </div> 
    )
}

export default FeaturedCard;