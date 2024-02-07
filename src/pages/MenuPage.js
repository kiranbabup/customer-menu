import { Box } from '@mui/material';
import HeaderComponent from '../components/HeaderComponent';
import CustomizedAccordions from '../components/CustomizedAccordions';
import menuBG from "../assets/images/menubg.png";
import foodImage from "../assets/images/foodImage.png";
import { dataColor } from '../assets/data/constants';
import { useState } from 'react';

const MenuPage = ({foodList, id}) => {
    const [isButtonDisplay, setButtonDisplay] = useState(true);

    return (
        <Box
            sx={{
                // backgroundColor: "black", 
                backgroundColor: dataColor.color, 
                color: "white",
                backgroundImage: `url(${menuBG})`,
                backgroundSize: 'cover',
            }}
        >
            <HeaderComponent id={id} isButtonDisplay={isButtonDisplay} setButtonDisplay={setButtonDisplay}/>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1, width:"100%", height:"10rem"}}>
                <Box component="img"
                    sx={{ borderRadius: "15px", width: "90%", height: "100%", }}
                    alt="Food Image"
                    src={foodImage} />
            </Box>
                <CustomizedAccordions foodList={foodList} setButtonDisplay={setButtonDisplay} />
        </Box>
    )
}
export default MenuPage;