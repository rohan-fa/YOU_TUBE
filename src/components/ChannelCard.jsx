import {Box, CardContent, Typography, CardMedia} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../Utils/constants';

const ChannelCard = ({channelDetail}) => (
    <Box
      sx={{ 
        boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px'}, height: '326px', margin: 'auto'
    }}
> 
       <Link to={`/channel/${channelDetail?.id?.channelId}`}>  {/* we want to link the thumbnail so that anyone can click and go inside of it, inside of there will be card content */}
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
                />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px'}} />
                </Typography>{/* we are writing this because in the desplay page subscription is not showing but in the profile page it does so for that. statistics= which is only you are going to get in the profile page, and subscriberCount so only if that exist? we want to render another typography  */}
                {channelDetail?.statistics?.subscriberCount && (    
                   <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber    {/* what parseInt method does? often time we get the value from quaryString,come from a form filled, come form somewhere user types place out, that value could be in json as well,data file or some quotation marks around the numbers,you need to deal with it as if it a number,but the value you are getting is string      */}
                   </Typography> 
                )}          {/* {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} this is going to give us human readable number something like 30,342 */}
            </CardContent>     
       </Link> 
    </Box>
  )


export default ChannelCard
