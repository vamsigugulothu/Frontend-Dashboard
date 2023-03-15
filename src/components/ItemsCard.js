import React from "react";
import * as Icons from "react-icons/fa";

const ItemsCard = (props) => {
    const { item }= props
    const FaIcon = Icons[item.icon];
    return (
        <>
            <div className="d-flex align-items-center m-2 p-1">
                <FaIcon className="" size="30" />
                <p className="h3 p-2">{item.header}</p>
            </div>
        </>
    );
}

export default ItemsCard;