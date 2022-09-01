import React, { useEffect, useState } from "react";
import "./main.css";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import axios from "axios";
import Button from '@mui/material/Button';

const Left = () =>{
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fc444b3a393c49eb99efd6f63d669444',
                );
                setArticles(response.data);
            } catch(e) {
                console.log(e)
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        // return <NewsListBlock>대기 중...</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을 때
    if (!articles){
        return null;
    }

    return(

        <div className="container left">
            {/*<NewsListBlock/>*/}
            <p><strong>삼성전자</strong></p>
            <div className="wra">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="./02_images/bigthumbnail@3x.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {setArticles}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTlfMjYx%2FMDAxNjYwODg1NTEwOTMx.1daoRflPsCvsXK9k4GBXDp95AuhsNHjKE8SDn6ZslGIg.LlYh7zyENE7mwSQipRGmZ7hMHYhNYHGLTHXv90RAXlgg.JPEG.minis0523%2FKakaoTalk_20220817_131212793_04.jpg&type=sc960_832"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTlfMjYx%2FMDAxNjYwODg1NTEwOTMx.1daoRflPsCvsXK9k4GBXDp95AuhsNHjKE8SDn6ZslGIg.LlYh7zyENE7mwSQipRGmZ7hMHYhNYHGLTHXv90RAXlgg.JPEG.minis0523%2FKakaoTalk_20220817_131212793_04.jpg&type=sc960_832"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
            <div>삼성전자와 관련된 최신 뉴스가 23개 있습니다.</div>
            <div className="HB">
                <Button href="#text-buttons">필수소비재</Button>
                <Button href="#text-buttons">음식료 및 담배</Button><Button href="#text-buttons">식료품</Button>
                <Button href="#text-buttons">키워드 4개까지 띄움</Button>
                


            </div>
        </div>
    )
}
export default Left;