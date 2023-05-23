import React from 'react'
import { pagesInfo } from "./components/subFiles/Data";
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate();
    function handleClicked(pages) {
        navigate("/" + pages.categoryName)
    }

    return (
        <div>
            <div className="backgroundimage">
            </div>
            <div className="categoryinput">
                {pagesInfo.map((pages, index) => {
                    return (
                        <div className="productcategory" key={index} onClick={() => { handleClicked(pages) }}>
                            <img src={pages.freshProduceImg} alt="Fresh" />
                            <p className="disc">{pages.disc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home