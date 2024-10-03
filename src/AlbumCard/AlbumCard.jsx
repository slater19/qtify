// import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import Chip from '@mui/material/Chip';
import React from "react";


const AlbumCard = ({albumImage,title,follows,isShow1}) => {
  
  
  
  
  return (
    // <Card className="card">
    //   <CardMedia height="140" component="img" alt={product.name} image={product.image} className="card" />
    //   <CardContent>
    //   <Typography>{product.name}</Typography>
    //   <Typography fontWeight={700}>${product.cost}</Typography>
    //   <Rating value={product.rating} precision={0.5} readOnly/>
    //   </CardContent>
    //   <CardActions className="card-actions">
    //   <Button
    //   className="card-button" fullWidth={true} variant="contained"  onClick={handleAddToCart}
    //   >Add to Cart</Button>  
    //   </CardActions>
    // </Card>
    <Card className="card" sx={{ maxWidth: 345,color:"#000"}}> 
    <CardMedia height="140" component="img" alt={title} image={albumImage} className="card1" />
    <div id="fig">
    {isShow1?<Chip label={`${follows} Likes`} color='primary' style={{position: "relative", top: 8, right: 30,backgroundColor:'black'}} /> 
    :<Chip label={`${follows} Follows`} color='primary' style={{position: "relative", top: 8, right: 30,backgroundColor:'black'}} />} 
    </div>

    
    
    <Typography>{title} </Typography>
    
    
    
    
  </Card>
  );
};

export default AlbumCard;
