import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search} from '@mui/icons-material';


const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();//because when you submit a form its reload the page/ so now check if the searchTerm exist
    
    //if (searchTerm) meaning if something has been typed in?and then if that is the case, we can use, useNavigate hook, we first have to initialize it by saying const navigate... 
    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setsearchTerm('');//we have to reset the searchTerm to an empty string. 
    }
  } 

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxshadow: 'none', mr: {sm: 5} }}
    >
      <input 
      className='search-bar'
      placeholder='Search..'
      value={searchTerm}
      onChange={(e)=> setsearchTerm(e.target.value)}//this will let us type in but the question is how do we make the request to search thing to work to a quary? and we can do that adding handle submit function.  
      />
      <IconButton type='submit' sx={{
        p: '10px', color: 'red'
      }}>
        <Search />
      </IconButton>
      </Paper>
  )
}

export default SearchBar
