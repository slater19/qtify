
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';

// import styles from "./Section1.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Caraousel from "../Caraousel/Caraousel";
import Section1 from "../Section/Section1";


const TopAlbum = () => {

const [topAlbums,setTopAlbums]=useState([])
const [isShow1,setIsShow1]=useState(false)
const [isShow2,setIsShow2]=useState("Top Albums")

const fetchAlbumData = async() => {
    try {
        let res = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`)
      
        let data=res.data; 
        setTopAlbums(data) 
      // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
    } catch (error) {
        console.log("error",error.message);
    }
  };
 
  

  useEffect(()=>{fetchAlbumData(); },[]);
   
  return (
    <>
    <Section1 albums={topAlbums} isShow1={isShow1} isShow2={isShow2}/>

        </>
  )
        
    }

export default TopAlbum;
  