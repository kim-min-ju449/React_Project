import React from "react";
import "./main.css";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import axios from "axios";

const Right = () =>{

    return(

        <div className="container left">
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
                                {/*{el.subject}*/}
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
        </div>
    )
}
export default Right;