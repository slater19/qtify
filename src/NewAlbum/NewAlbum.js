
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import Section1 from "../Section/Section1";
// import styles from "./Section1.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Caraousel from "../Caraousel/Caraousel"


const NewAlbum = () => {


  const [newAlbums,setNewAlbums]=useState([])
  const [isShow1,setIsShow1]=useState(false)
  const [isShow2,setIsShow2]=useState("New Album")
  




const fetchNewAlbums = async() => {
  try {
      let res = await axios.get(`https://qtify-backend-labs.crio.do/albums/new`)
      let data=res.data; 
      setNewAlbums(data) 
    // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
  } catch (error) {
      console.log("error",error.message);
  }
};
 
  useEffect(()=>{fetchNewAlbums(); })


   return (
    <>
   <Section1 albums={newAlbums} isShow1={isShow1} isShow2={isShow2}/>



        </>
        )
        
    }

export default NewAlbum;
  