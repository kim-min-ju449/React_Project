import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsI from './NewsI';
import axios from 'axios'
import Button from "@mui/material/Button";
// import NewsItem from "../Main/NewsItem";
import thumbnail01 from '../02_images/bigthumbnail01@3x.jpg';
import Singlenews from "./Singlenews";
import NewsItem from "../Main/NewsItem";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    //@media screen and (max-width: 768px){
    //    width: 100%;
    //    padding-left: 1rem;
    //    padding-right: 1rem;
    //}
`;

const NewsL = () =>{
    const [articles, setArticles] = useState([]);
    const [number, setNumber] = useState("");
    useEffect(() => {

        axios.get('http://dev-spis.newssalad.com:8081/news/realtime',
            {params: {"page":1, "size":4, "stockcode":"005930"}})
            .then(response=> setArticles(response.data.data))
            .catch(err => console.log("err"))
    }, []);
    return(
        <>
            <NewsListBlock>
                {articles && articles.map(data => (
                    <a href="/Singlenews"><NewsI key={data.subject} data={data}/></a>

                ))}


            </NewsListBlock>
            <ul>
                <li className="menu">삼성전자</li>
                <li className="menu">LG전자</li>
            </ul>
        </>
    )
}
export default NewsL;