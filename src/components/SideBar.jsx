import { Stack } from '@mui/material';
import { categories } from '../Utils/constants';

const selctedCategory = 'New';

const SideBar = () => (
    <Stack 
    direction='column'
    sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%'},
        flexDirction: { md: 'column'},
    }}
    >
        {categories.map((category) => (
            <button
            className='category-btn'
            style={{
                background: category.name === selctedCategory && '#FC1503', color: 'white',
            }} 
            key={category.name}
            >
                <span style={{color: category.name === selctedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
                <span style={{opacity: category.name === selctedCategory ? '1' : '0.8' }}>{category.name}</span>
            </button>
        ))};
    </Stack >
  )


export default SideBar
