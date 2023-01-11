import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import {  Box } from '@mui/material';

import { Videos, ChannelCard } from './';import { fetchFromAPI } from '../Utils/fetchFromAPI';
   {/* we will reuse the videos and channelCard components in here for styling or anyother purposes */}

const ChannelDetail = () => {    {/* lets start everything by wraping in a box when im clicking on the channel thumbnail inside of it there is nothing that means we are in a path wise= channel/channelid so how do we access the id in the code. answer is useParams. */}
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])

  const { id } = useParams(); {/* as we can see the id, now can useEffect hook that going to render as soon as our component opens. that useEffect re render as our id changes, so that we can pass the id as dependency array [id] */}
  
  console.log(channelDetail);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)                      
      .then((data) => setchannelDetail(data?.items[0]));   {/* we want to get the data and then the only thing we wanna do is to set the channel detail page, so lets useState for that,setchannelDetail it going be data?.items[0] and then the first channel in the list   */}
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)                      
      .then((data) => setvideos(data?.items));   {/* we need to fetch the videos, belonging that channel, we are resuing the same function this time for the video, after that .then() we get the videos */}
  }, [id])
   
  return (
    <Box minHeight='95vh'>
     <Box>{/* in the style the backgroung should be in the string because we are writing inside js file, zIndex= to appear above our profile image  */}
      <div style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,116,1) 35%, rgba(0,212,255,1) 100%)',
        zIndex: 10,
        height: '300px'
      }}  
      /> {/* this is the div will render the gradiant color cover background, for the gradiant color go to the cssgradiant.io and cooy the color code. */}
      <ChannelCard channelDetail={channelDetail} marginTop= '-110px' />  {/*after using the props in the feed thunmnail went up so to fix that we can send the styling through the props  */}
     </Box>
     <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' }}} />{/* marign right in small devices is 100px */}
          <Videos videos={videos} />
     </Box>
    </Box>
  )
}

export default ChannelDetail
     