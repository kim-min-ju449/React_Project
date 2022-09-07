import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios'
import Button from "@mui/material/Button";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    //padding-bottom: 3rem;
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
const AButton = () =>{
    console.log("LG전자")
}
const BButton = () =>{
    console.log("음식료 및 담배")
}

const NewsList = () => {
    const [articles, setArticles] = useState([]);
    const [number, setNumber] = useState(0);
    const [bname, setBname] = useState("");

    useEffect(() => {

        axios.get('http://dev-spis.newssalad.com:8081/news/realtime',
            {params: {"page":1, "size":3, "stockname":"LG전자",}})
            .then(response=> setArticles(response.data.data))

            .catch(err => console.log("err"))
    }, []);
    useEffect(() => { //5번 4개

        axios.get('http://dev-spis.newssalad.com:8081/stocks/relationwords/stocks',
            {params: {"size":4, "stockcode":"005930"}})
            .then(response => setBname(response.data.data))

            .catch(err => console.log("err"))
    }, []);
    useEffect(() => { //3번
        axios.get('http://dev-spis.newssalad.com:8081/stocks/dailyreport/stocks',
            {params: {"stockcode":"066570"}})
            .then(response=> setNumber(response.data.newsdata.newscnt))

            .catch(err => console.log("err"))
    }, []);
    const Obutton = (data) => {
        console.log(data.name)
    }

    // articles 값이 유효할 때
    return (
        <>
            <div className="footerbackground">
            <p><strong>LG전자</strong></p>
            <NewsListBlock>
                {articles && articles.map(data => (
                    <NewsItem key={data.subject} data={data}/>
                ))}
            </NewsListBlock>
            <div className="three">LG전자와 관련된 최신 뉴스가 {number}개 있습니다. <a href="/newsList/005930">리스트보기</a></div>
            <div className="HB">
                <h3>종목명&키워드</h3>

                {bname && bname.map(data => (
                    <Button onClick={Obutton(data)}>{data.name}</Button>

                ))}
            </div>
            </div>
        </>
    );
};
export default NewsList;