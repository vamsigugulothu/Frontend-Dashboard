import * as Icons from "react-icons/fa";
import profile from "../assests/images/profile.jpg"

const SubContainer = () => {
    const FaIcon = Icons["FaHSquare"];
    return (
        <div className="py-5 subcontainer" style={{ backgroundColor: "#F9FAFB"}}>
            <div className="mt-5">
                <div className="d-flex align-items-center justify-content-center p-1">
                    <FaIcon className="" size="20" />
                    <p className="h4 p-2">Sysiphus</p>
                </div>
                <p className="h1 w-75 mx-auto">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
            </div>
            <div className="d-inline-block mx-auto mb-4 my-2" style={{ maxWidth: "100%" }}>
                <img src={profile} className="rounded-circle border" style={{ maxWidth: "12%" }}  alt="img"/>
                <p className="h6 m-2">Candice Wu</p>
                <p className="h6 fw-lighter">Product Manager, Sisyphus</p>
            </div>
        </div>
    );
}

export default SubContainer;