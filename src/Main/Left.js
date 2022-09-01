import React from 'react';
import styled from 'styled-components';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import thumbnail01 from '../02_images/bigthumbnail01@3x.jpg'
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

const Left = ({ data }) => {
    const {subject, summary, url} = data;
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
                                image={thumbnail01}
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
                <div>삼성전자와 관련된 최신 뉴스가 23개 있습니다.</div>
                <div className="HB">
                    <Button href="#text-buttons">필수소비재</Button>
                    <Button href="#text-buttons">음식료 및 담배</Button><Button href="#text-buttons">식료품</Button>
                    <Button href="#text-buttons">키워드 4개까지 띄움</Button>

                </div>
            </div>

        </NewsItemBlock>
    );
};

export default Left;