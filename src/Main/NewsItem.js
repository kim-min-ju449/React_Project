import React from 'react';
import styled from 'styled-components';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import thumbnail01 from '../02_images/bigthumbnail01@3x.jpg';
import thumbnail02 from '../02_images/bigthumbnail02@3x.jpg';

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
const NewsItem = ({ data }) => {
    const {subject, summary, url} = data;
    return (
        <div className="mainContainer">
        <NewsItemBlock className="item" >

            <div className="container left">
                {/*<NewsListBlock/>*/}
                <p><strong>삼성전자</strong></p>
                <div className="wra">
                    <Card sx={{ maxWidth: 345 }} className="card">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={thumbnail01}
                                image={thumbnail02}
                                alt="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {subject}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>

        </NewsItemBlock>
        </div>
    );
};
export default NewsItem;