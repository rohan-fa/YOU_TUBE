import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';// all of these coming from index.js inside of the component folder 

 function App() {
    return (
        <BrowserRouter>
            <Box sx={{ backgroundColor: '#000' }}>                {/*  mui sx props of mt,mr =2, color: */}
                <Navbar />
                <Routes>                 {/* built in component by react router-dom,inside of it we can place individual routes components */}
                    <Route path='/' exact element={<Feed />} />    {/* element which going to render and is going to be a feed component*/}
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:searchTerm' element={<SearchFeed />} />
                </Routes>
            </Box>

        </BrowserRouter>
    );
}     

 
 export default App;
 