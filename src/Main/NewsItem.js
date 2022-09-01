import React from 'react';
import styled from 'styled-components';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const NewsItemBlock = styled.div`
    display: flex;
    .thumbnail {
        margin-right: 1rem;
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }
    .contents{
        h2 {
            margin: 0;
            a {
                color: black;
            }
        },
    }
    & + & {
        margin-top: 3rem;
    }
    `;

const NewsItem = ({ article }) => {
    const {title, description, url} = article;
    return (
        <NewsItemBlock>
            <div className="container left">
                {/*<NewsListBlock/>*/}
                <p><strong>삼성전자</strong></p>
                <div className="wra">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image=""
                                alt="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
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
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
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
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                    <a href={url} target='_blank' rel='noopener noreferrer'>
                                        {title}
                                    </a>
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
            {/*{urlToImage && (*/}
            {/*    <div className='thumbnail'>*/}
            {/*        <a href={url} target='_blank' rel='noopener noreferrer'>*/}
            {/*            <img src={urlToImage} alt='thumbnail' />*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*<div className='contents'>*/}
            {/*    <h2>*/}
            {/*        <a href={url} target='_blank' rel='noopener noreferrer'>*/}
            {/*            {title}*/}
            {/*        </a>*/}
            {/*    </h2>*/}
            {/*    <p>{description}</p>*/}
            {/*</div>*/}
        </NewsItemBlock>
    );
};

export default NewsItem;