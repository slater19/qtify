import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Navigation} from "swiper/modules";
import Grid from '@mui/material/Grid2';

 function Caraousel(props) {
    return (
        <>
        <Grid container spacing={4}>
        <Swiper  modules={[Navigation]} className="mySwiper">
             {props.topAlbum.slice(0,Math.floor(props.topAlbum.length/2)).map((album) =>(
              <SwiperSlide style={{color: "white"}}>{
                <Grid key={album.id} item lg={2}>
                <AlbumCard albumImage={album.image} title={album.title} follows={album.follows} />
              </Grid>}</SwiperSlide>
            ))}</Swiper>
          </Grid> 
        
        
        
                </>
                
    )}export default Caraousel;
            
