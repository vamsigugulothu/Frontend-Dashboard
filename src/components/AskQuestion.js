import { useState } from "react";
import { FaMinusCircle,FaPlusCircle } from "react-icons/fa"

const AskQuestion = (props) => {
    const { data } = props;
    const [showDropdown, setShowDropdown] = useState(false)
    const handleClick = () => {
        setShowDropdown(!showDropdown)
    }
    return (
        <div className="d-flex border-bottom justify-content-between">
            <div className=" p-3">
                <p className="h6 text-start">{data.question}</p>
                { showDropdown && <p className="fw-lighter text-start">{data.answer}</p>}
            </div>
            <div className="p-3">
               { showDropdown ? <FaMinusCircle onClick={handleClick} style={{cursor: "pointer"}} />: <FaPlusCircle onClick={handleClick} style={{cursor: "pointer"}} />}
            </div>
        </div>
    );
}

export default AskQuestion;