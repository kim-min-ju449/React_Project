import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios'
import Button from "@mui/material/Button";

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

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    let number = 0;

    useEffect(() => {

        axios.get('http://dev-spis.newssalad.com:8081/news/realtime',
            {params: {"page":1, "size":3, "stockname":"LG전자",}})
            .then(response=> setArticles(response.data.data))
            .catch(err => console.log("err"))
    }, []);

    // articles 값이 유효할 때
    return (
        <>
            <NewsListBlock>
                {articles && articles.map(data => (
                    <NewsItem key={data.subject} data={data}/>

                ))}


            </NewsListBlock>
            <div className="three">LG전자와 관련된 최신 뉴스가 {number}개 있습니다. <a href="/newsList/005930">리스트보기</a></div>
            <div className="HB">
                <h3>종목명&키워드</h3>
                <Button href="#text-buttons">LG전자</Button>
                <Button href="#text-buttons">음식료 및 담배</Button><Button href="#text-buttons">식료품</Button>
                <Button href="#text-buttons">키워드 4개까지 띄움</Button>
            </div>
        </>
    );
};
export default NewsList;