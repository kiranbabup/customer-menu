import { Box } from '@mui/material';
import HeaderComponent from '../components/HeaderComponent';
import CustomizedAccordions from '../components/CustomizedAccordions';

const MenuPage = ()=>{
    return(
        <Box 
        // sx={{backgroundColor: "aliceblue"}}
        >
            <HeaderComponent />
            <Box>
                <CustomizedAccordions />
            </Box>
        </Box>
    )
}
export default MenuPage;