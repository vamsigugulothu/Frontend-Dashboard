import Container from "react-bootstrap/esm/Container"
import Iphone from "../assests/images/iphone.png"
import ChildImage from "../assests/images/onlydata.png"
import FeatureCards from "./FeatureCards";

const cardData = [
    {"icon": "FaMailBulk", "heading": "Share team inboxes", "description": "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."},
    {"icon": "FaMailBulk", "heading": "Deliver instant answers", "description": "An all-in-one customer service platform that helps you balance everything your customers need to be happy."},
    {"icon": "FaMailBulk", "heading": "Manage your team with reports", "description": "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."}
]

const Features = () => {

    return (
        <Container className="">
            <div className="mt-5">
                <div className="d-inline-block px-2 rounded-pill" style={{ backgroundColor: "#F9F5FF", color: "#6941C6"}}>Features</div>
                <p className="h2 w-md-75 mx-auto">Cutting-edge features for advanced analytics.</p>
                <p className="h6 w-md-75 mx-auto fw-lighter">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>

            <div className="w-100 d-flex div-mobile">
                <img src={Iphone} className=" mt-5" />
                <div id="gif" className="">
                    <img src={ChildImage} className="w-100 d-none d-md-block" />
                </div>
            </div>
            <div className="d-flex gap-2 feat-card flex-column flex-md-row mb-5">
                {cardData?.map((item,idx) => {
                    return <FeatureCards item={item} key={idx}/>
                })}
            </div>
            <hr></hr>
        </Container>
    );
}

export default Features;