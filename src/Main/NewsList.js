import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios'
import Left from "./Left";
import Right from "./Right";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    //@media screen and (max-width: 768px){
    //    width: 100%;
    //    padding-left: 1rem;
    //    padding-right: 1rem;
    //}
`;

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        axios.get('http://dev-spis.newssalad.com:8081/news/realtime',
            {params: {"page":1, "size":3, "stockcode":"005930",}})
            .then(response=> setArticles(response.data.data))
            .catch(err => console.log("err"))



    }, []);

    // articles 값이 유효할 때
    return (
        <NewsListBlock>
            {articles && articles.map(data => (
                <NewsItem key={data.subject} data={data} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;