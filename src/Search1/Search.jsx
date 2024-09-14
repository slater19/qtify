import { Typography } from "@mui/material";
import {
  CircularProgress,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
// import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";

const Search = () => {

const [timer,setTimer]=useState(null)
const [searchText,setSearchText]=useState('')

const performSearch = async (text) => {
    try{
      const res = await axios.get(`${config.endpoint}/products/search?value=${text}`)
      setProductList(res.data)  
      return res.data;
    }
    catch(e){
      if(e.response){if(e.response.status===404)
        {setProductList([])}
    if(e.response.status===500){
     enqueueSnackbar(e.response.data.message,{variant:'error'})
     setProductList(products)
     
     }}else{
        enqueueSnackbar("Could not fetch products.Check the backend is running", {variant:'error'})}
      }
  }


useEffect(()=>{
    if(timer)clearTimeout(timer)
    else{
        const timerId=setTimeout(()=>{performSearch(searchText)},2000)
        setTimer(timerId)
    }
    },[searchText]);

function handleChange(e){
    setSearchText(e.target.value)} 

  

return (
<Box mb={2}>
<TextField
className="search-desktop"
size="small"
type="text"
placeholder="Search for video title"
name="search-box"
value={searchText}
onChange={handleChange}/>
</Box>
);}

export default Search;