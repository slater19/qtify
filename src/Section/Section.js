
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';

import styles from "./Section.module.css";
// import AlbumCard from "../AlbumCard/AlbumCard";
// import Caraousel from "../Caraousel/Caraousel"


const Section = () => {

const [topAlbums,setTopAlbums]=useState([])
const [isShow,setIsShow]=useState(false)

const showHanlder  = () => { setIsShow(prevState => !prevState) };

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
        <div className={styles.parent}>
        <div className={styles.topAlbumParent}>
        <div className={styles.AlbumBar}>
        <p className={styles.heading}>Top Albums</p>
        {/* {!isShow?(<button className={styles.toggleButton} onClick={showHanlder}>Show all</button>):
        (<button className={styles.toggleButton} onClick={showHanlder}>Collapse</button>)}</div>
        {!isShow?(<Caraousel topAlbum={topAlbums}/>):
        (
         <Grid container spacing={4}>
         {topAlbums.map((album) =>(
                <Grid key={album.id} item lg={2}>
                <AlbumCard albumImage={album.image} title={album.title} follows={album.follows} />
              </Grid>))}</Grid>)}</div></div>
        </>)} */}
        </div></div></div></>)}

export default Section;
  