import Container from "react-bootstrap/esm/Container";


const Freetrail = () => {
    return (
        <Container fluid style={{ backgroundColor: "#F9FAFB"}}>
            <div className="p-3">
                <p className="h2 mt-5 pt-5">Start your free trial</p>
                <p className="fw-lighter">Join over 4,000+ startups already growing with Untitled.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center m-4 pb-5">
                    <button type="button" className="btn order-2 order-md-1 btn-outline-secondary">Learn More</button>
                    <button className="btn text-white order-1 order-md-2" type="button" style={{backgroundColor: "#6941C6"}}>Get Started</button>
                </div>
            </div>
        </Container>
    );
}

export default Freetrail;