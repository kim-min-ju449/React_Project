import React, { useEffect, useState } from 'react';
import Main from "./Main/Main";
//import './App.css';
import "./Main/Main.css";
// import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import NewsList from "./Main/NewsList";
import NewsL from "./News/NewsL";


function App() {
    const [articles, setArticles] = useState("");
    // useEffect(() => {
    //     axios.get('http://dev-spis.newssalad.com:8081/news/realtime',
    //         {params: {"page":1, "size":3, "stockcode":"005930",}})
    //         .then(response=> setArticles(response.data.data))
    //         .catch(err => console.log("err"))
    // }, []);
  return (
    <div>
        <BrowserRouter>
            {/*{window.location.pathname === "/" ? "" : <Login/>}*/}
            <Routes>
                <Route path="/newsList" element={<NewsL/>}/>

                {/*<Route path="/" element={<Main/>}/>*/}
                {/*<Route path="/news" element={<News/>}/>*/}
            </Routes>
        </BrowserRouter>
      <Main/>

    </div>


  );
}

export default App;
