import React from "react";

const Header = () =>{
    return (
        <>
            <div className="header">
                <ul className="menu">
                    <a href="/" className="headermain"><li>메인</li></a>
                    <a href="/newsList" className="headernews"><li>뉴스</li></a>
                </ul>
            </div>
        </>
    )
}
export default Header;