import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material'; 
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../Utils/constants';

const VideoCard = ( {video: { id: {videoId}, snippet}}) => {

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>      {/* that link going to wrap the media component   */}{/*found some error in the commandline so inside the link component we will right - to={if videoId exsist? then we will go forward to /video/${videoId} if it doesnot exsist then we want to go to demoVideoUrl   } */}
           <CardMedia                   
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: {
              xs: '100%', sm: '358px', md: '320px' 
            }, height: 180}}
            />     {/*CardMedia going to have a image property,inside of there we are go into the snippet,? mark dot thumbnails?.high? dot url, make sure to give qurstion marks before dots,else it will come undefine   */}
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}> {/*CardContent material ui content*/}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography varient='subtitle1' forntWeight= 'bold' color='#FFF' >                {/*now lets make it a bit bigger by giving a variant subtitle1*/}
                {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)} {/*if the title doesnot exist we can render the demo*/}
            </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl}>  {/* snippet question mark dot channel id if its exist, we are going to point channel   */}  
            <Typography varient='subtitle2' forntWeight= 'bold' color='gray' >                {/*now lets make it a bit bigger by giving a variant subtitle1*/}
                {snippet?.channelTitle || demoChannelTitle} {/*if the title doesnot exist we can render the demo*/}
                <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}} />
            </Typography>
        </Link>
      </CardContent> 
    </Card>
  )
}

export default VideoCard
