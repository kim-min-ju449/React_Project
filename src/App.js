import React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./Main/Main.css";
import Header from './Header/Header'
import Main from "./Main/Main";
import NewsL from "./News/NewsL";
import Singlenews from "./News/Singlenews";
const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/newsList" element={<NewsL/>}/>
                <Route path="/singlenews" element={<Singlenews/>}/>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;