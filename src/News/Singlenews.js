import React, {useEffect, useState} from "react";
import ListI from "./NewsI";
import ListL from "./NewsL";
import '../Main/Main.css';
import axios from "axios";


const Singlenews = ({data}) =>{
    const [url, setUrl] = useState([]);
    const {subject, summary} = data;
    console.log(data)
    // useEffect(() => { //5
    //
    //     axios.get('http://dev-spis.newssalad.com:8081/news/similar',
    //         {params: {"page":1,
    //                 "size":10,
    //                 "newsid":"0180005272386"}})
    //         .then(response=> setUrl(response.data.data))
    //         .catch(err => console.log("err"))
    // }, []);
    return(
        <>
            {url}
            <h1>{data.subject}</h1>
            <h3>{data.summary}</h3>
            <h4>{data.url}</h4>
        </>
    )

}
export default Singlenews;