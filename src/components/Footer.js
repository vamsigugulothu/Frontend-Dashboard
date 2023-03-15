import Container from "react-bootstrap/esm/Container";
import "./styles.css"


const Generator = (props) => {
    const { data} = props
    return (
    <>
        <p className="h5 mb-2" style={{ color: "#98A2B3" }}>{data.header}</p>
        <ul className="list-unstyled">
            { data?.subhead.map((item,idx) => {
                return <li key={idx}><a href="#" className="text-decoration-none">{item}</a></li>
            })}
        </ul>
    </>
    );
}

const Footer = () => {

    const footerdata = [
        {"header": "Product","subhead": ["Overview","Features","Solutions","Tutorials","Pricing"]},
        {"header": "Company","subhead": ["Overview","Features","Solutions","Tutorials","Pricing"]},
        {"header": "Resources","subhead": ["Overview","Features","Solutions","Tutorials","Pricing"]},
        {"header": "Use cases","subhead": ["Overview","Features","Solutions","Tutorials","Pricing"]},
        {"header": "Social","subhead": ["Overview","Features","Solutions","Tutorials","Pricing"]},
        {"header": "Legal","subhead": ["Overview","Features","Solutions","Tutorials","Pricing"]}
    ]
    return (
        <Container className="">
            <div className="row mt-5 mb-1">

                {footerdata?.map((data, idx) => {
                    return <div className="col-lg-2 col-6 mb-4" key={idx}>
                        <Generator data={data} key={idx} />
                    </div>
                })}
            <hr/>
            </div>
            <div className="d-md-flex justify-content-between align-items-center p-2">
                <p className="h6">Tooljet</p>
                <p>©2023 Untitled UI. All rights reserved.</p>
            </div>
        </Container>
    );
}

export default Footer;