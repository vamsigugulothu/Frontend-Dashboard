import * as Icons from "react-icons/fa";

const FeatureCards = (props) => {
    const { item }= props
    const FaIcon = Icons[item.icon];
    return (
        <div className="text-center">
            <div className="mt-3"></div>
            <div className="d-inline rounded-circle p-2">
                <FaIcon className="mb-3" size="30" />
            </div>
            <p className="h5">{item.heading}</p>
            <p className="w-md-75 mx-auto fw-lighter">{item.description}</p>
            <p className="" style={{ color: "#6941C6"}}>Learn more..</p>
        </div>
    );
}

export default FeatureCards;