import React from "react";
import { Link } from "react-router-dom";

export const Items = ({ image, message, disc, path }) => {
  return (
    <>      
        <Link className="linkitem" to={path} >
          <div className="productcategory">
            <img src={image} alt={message} />
            <p className="disc">{disc}</p>
          </div>
        </Link>

    </>
  );
};
