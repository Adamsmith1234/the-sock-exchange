import FeaturedCard from "./FeaturedCard"

const FeaturedContainer = (props) => {
    return (
            <div className="card-container d-flex flex-row justify-content-start" style={{
            gap: "20px", padding: "20px" }}>
            {
                props.props.map((item) => (
                    <FeaturedCard  key={item.id}  data={item.feature} />
                    ))
            }
            </div>

    )
}

export default FeaturedContainer;