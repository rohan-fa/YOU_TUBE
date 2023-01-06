import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material'; 
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle, demoVideoUrl } from '../Utils/constants';

const VideoCard = ( {video: { id: {videoId}, snippet}}) => {

  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>      {/* that link going to wrap the media component   */}{/*found some error in the commandline so inside the link component we will right - to={if videoId exsist? then we will go forward to /video/${videoId} if it doesnot exsist then we want to go to demoVideoUrl   } */}
           <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{ width: 358, height: 180}}
            />     {/*CardMedia going to have a image property,inside of there we are go into the snippet,? mark dot thumbnails?.high? dot url, make sure to give qurstion marks before dots,else it will come undefine   */}
      </Link>
    </Card>
  )
}

export default VideoCard
