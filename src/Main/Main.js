import React from "react";
import Left from "./Left";
import Right from "./Right";
import NewsList from "./NewsList";

const Main = () =>{
    return(
        <div className="BestCon">
        <div className="mainContainer" >
        {/*<Left location="left"/>*/}
        {/*<Right location="rigjt"/>*/}
            <NewsList/>
        </div>
        </div>
    )
}
export default Main