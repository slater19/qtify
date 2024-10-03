import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Section1 from "../Section/Section1";

// import styles from "./Section1.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import axios from "axios";
import  { useEffect, useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SongsTab() {
  const [value, setValue] = React.useState(0);
  const [songs ,setSongs]=useState([]);
  const [isShow1,setIsShow1]=useState(true)
  const [genre ,setGenre]=useState([]);
  const [isShow2,setIsShow2]=useState("Songs")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const fetchSongs = async() => {
    try {
        let res = await axios.get(`https://qtify-backend-labs.crio.do/songs`)
      
        let data=res.data; 
        setSongs(data); 
        console.log("songs",songs);
      // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
    } catch (error) {
        console.log("error",error.message);
    }
  };
  const fetchGenre = async() => {
    try {
        let res = await axios.get(`https://qtify-backend-labs.crio.do/genres`)
      
        let data=res.data.data; 
        setGenre(data) 
        console.log("genre",genre);
      // TODO: CRIO_TASK_MODULE_CART - Pass Bearer token inside "Authorization" header to get data from "GET /cart" API and return the response data
    } catch (error) {
        console.log("error",error.message);
    }
  };

  useEffect(()=>{fetchSongs(); fetchGenre();},[]);

  return (
    
      <>
      <Section1 albums={songs} isShow1={isShow1} isShow2={isShow2} genre={genre} handleChange={handleChange} value={value}/> 
      
             
    </>
  );
}
