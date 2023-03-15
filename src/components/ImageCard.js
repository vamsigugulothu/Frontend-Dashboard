import MacWrapper from "../assests/images/macmain.jpg";
import ChildImage from "../assests/images/onlydata.png"
import "./styles.css"

const ImageCard = () => {
    return (
        <div className="w-100 computer">
            <img src={MacWrapper} className="w-100" />
            <div id="gif" className="">
                <img src={ChildImage} className="w-100 border" />
            </div>
        </div>
    );
}

export default ImageCard