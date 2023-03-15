import Appbar from "../components/Navbar";
import { FaBeer } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
import ImageCard from "../components/ImageCard";
import ItemsCard from "../components/ItemsCard";
import "./styles.css"
import SubContainer from "../components/SubContainer";
import Features from "../components/Features";
import Question from "../components/Questions";
import Footer from "../components/Footer";
import Freetrail from "../components/Freetrail";

const Main = () => {
    const ItemList = 
            [
             {"header":"Layer","icon":"FaHSquare"},
             {"header":"Sysiphus","icon":"FaHSquare"},
             {"header":"Circooles","icon":"FaCircleNotch"},
             {"header":"Catalog","icon":"FaLifeRing"},
             {"header":"Quotient","icon":"FaHSquare"},
             {"header":"Layer","icon":"FaHSquare"},
            ];
    return (
        <>
            <Appbar/>
            <div className="container">
                <div className="mt-5">
                    <div className="d-inline-block p-1 mt-2 px-2 rounded-pill" style={{ backgroundColor: "#F9F5FF", color: "#6941C6"}}>
                        <div className="d-inline-block px-2 me-1 bg-white rounded-pill" >New Feature</div>
                        Checkout the team Dashboard
                    </div>
                    <div className="text-center m-3">
                        <h1><b>Beautiful analytics to grow smarter</b></h1>
                        <div className="fw-normal text-wrap mx-auto text-center mt-3 text-width" >
                            Powerful, self-serve product and growth analytics to help you convert,
                            engage, and retain more users. Trusted by over 4,000 startups.
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                    <button type="button" className="btn order-2 order-md-1 btn-outline-secondary"><AiOutlinePlayCircle/>   Demo</button>
                    <button className="btn text-white order-1 order-md-2" type="button" style={{backgroundColor: "#6941C6"}}>Sign up</button>
                </div>
                <ImageCard/>
                <div className="container pt-3 mb-2 bg-white list-card">
                    <div className="mb-3 py-3" style={{ zIndex:999}}>
                        <p>Join 4,000+ companies already growing</p>
                        <div className="mt-3 d-flex flex-wrap justify-content-md-between">
                            { ItemList?.map((item,idx) => {
                                return <ItemsCard item={item} key={idx}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <SubContainer/>
            <Features/>
            <Question/>
            <Freetrail/>
            <Footer/>
        </>
    );
}

export default Main;