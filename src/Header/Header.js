import React from "react";
import './Header.css';

const Header = () =>{
    return (
        <>
            <div className="header">
                <ul className="menu">
                    <a href="#"><li>메인</li></a>
                    <a href="/newsList"><li>뉴스</li></a>
                </ul>
            </div>
        </>
    )
}
export default Header;