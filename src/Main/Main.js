import React from "react";
import NewsList from "./NewsList";
import NewsList2 from "./NewsList2";
import Header from "../Header/Header";
import './Main.css';

const Main = () => {
    return(
        <>
        <Header/>
        <div className="BestCon">
        <div className="mainContainer">
            <div>
            <NewsList/>
            <NewsList2/>
            </div>
        </div>
        </div>

            </>
    )
}
export default Main;