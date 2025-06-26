import FeaturedCard from "./FeaturedCard"

const Featured = (props) => {
    return (
            <div className="card-container d-flex flex-row justify-content-start" style={{
            gap: "20px", padding: "20px" }}>
                <h2>Featured</h2>
            {
                props.props.map((item) => (
                    <FeaturedCard  key={item.id}  data={item.feature} />
                    ))
            }
            </div>

    )
}

export default Featured;