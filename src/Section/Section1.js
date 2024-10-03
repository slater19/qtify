
import axios from "axios";
import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid2';
import PropTypes from 'prop-types';
import styles from "./Section1.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";
import Caraousel from "../Caraousel/Caraousel";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Section1 = ({albums,isShow1,isShow2,genre,handleChange,value}) => {

const [isShow,setIsShow]=useState(false)
// const [value, setValue] = React.useState(0);

const showHanlder=()=>{setIsShow(!isShow)} 
 
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


return (
    <>
    <div class={styles.parent} >
    <div class={styles.container}>
    
  {!isShow1? <div class={styles.button_container}>
  <p class={styles.left}>{isShow2}</p>
  <button className={styles.right} onClick={showHanlder}>{!isShow?"Show all":"Collapse"}</button></div>:
  
  <div class={styles.button_container}>
  <p class={styles.left}>{isShow2}</p>
  </div>
  }
         {/* {!isShow?
         (<Caraousel topAlbum={albums}/>): */}
         {!isShow1?
         (<Grid container spacing={4}>
         {albums.map((album) =>(
                <Grid key={album.id}  size={{ lg: 1.7, md: 1.7,xs: 6 }}>
                <AlbumCard albumImage={album.image} title={album.title} follows={album.follows} isShow1={isShow1}/>
              </Grid>))}</Grid>):
              (
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  textColor='primary' TabIndicatorProps={{sx:{backgroundColor:'green'}}} aria-label="basic tabs example">
        <Tab label="All"  />
        {genre.map((item, index) => (
          <Tab label={item.label} {...a11yProps(index)} />
        ))}       
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Grid container spacing={4}>
         {albums.map((album) =>(
                <Grid key={album.id}  size={{ lg: 1.7, md: 1.7,xs: 6 }}>
                <AlbumCard albumImage={album.image} title={album.title} follows={album.likes} isShow1={isShow1} />
              </Grid>))}</Grid>
      </CustomTabPanel>
                {genre.map((item, index)=> (
                  <CustomTabPanel value={value} index={index+1}>
                    
                    <Grid container spacing={4}>
                    {albums.filter(s => s.genre.key===(item).key).map((album) =>(
                            <Grid key={item.id}  size={{ lg: 1.7, md: 1.7,xs: 6 }}>
                            <AlbumCard albumImage={album.image} title={album.title} follows={album.likes} isShow1={isShow1} />
                          </Grid>))}
                          </Grid>
                  </CustomTabPanel>))}</Box>  )
}


{/* {genre.map((item, index) => (
      <CustomTabPanel value={value} index={index}>
        <Section1 albums={topAlbums} isShow1={isShow1}/>
        
      </CustomTabPanel>))} */}
      {/* <Grid container spacing={4}>
        {songs.filter(s => s.genre.key===item.key).map((album) =>(
                <Grid key={item.id}  size={{ lg: 1.7, md: 1.7,xs: 6 }}>
                <AlbumCard albumImage={album.image} title={album.title} follows={album.follows} />
              </Grid>))}
              </Grid> */}

            
             </div> 
             
             </div>




        </>
        )
        
    }

export default Section1;
  