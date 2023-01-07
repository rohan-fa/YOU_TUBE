import { useState, useEffect } from "react";
import { Box, Typography} from '@mui/material';
import { useParams } from "react-router-dom";//after importing in the app we will see how did we call the parameter? searchTerm 

import { Videos } from './index.js'
import { fetchFromAPI } from "../Utils/fetchFromAPI";




const SearchFeed = () => {

  const [videos, setVideos] = useState([]);     //* copied the entire thing from feed, removed the stack portion, removed the selectedCategory *
  const  {searchTerm } = useParams(); //once we set the quary we pass it through api url,and also dependency array, so that it get updated everytime we seach for something, 
  //important thing is to figure out how can we fetch the data,regarding our searched videos.so if we go to rapid api, and look for search, search?part=snippet&q=.. this the thing we are already did in the past, now we have to pass the right quary, 'q' in the doc,   
  useEffect(() => {
     fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(
      (data) => setVideos(data.items)// we should be pulling our data from our params like if we search react build and deploy, in the path their should be localhost:3000/search/build%20and%20deploy%20react%20js, that means we should be pulling our data from parameters to the browser,    
     )
  }, [searchTerm]); 

  return (  
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant='h4' fontweight='bold' mb={2} sx={{
        color: 'white'
      }}>
        Search Results for :<span style={{color: '#F31503'}}>{searchTerm}</span>Videos
      </Typography>

      <Videos videos={videos}/>
   </Box>
  )
}

export default SearchFeed

