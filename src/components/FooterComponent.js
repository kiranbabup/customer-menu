import { Box, Button, IconButton, Tooltip, styled } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Zoom from '@mui/material/Zoom';

const FooterComponent = () => {
    const FooterBox = styled(Box)({
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTop: "1px dashed gray"
    })
    const handleCallUsClick = () => {
        const phoneNumber = "7207486526";
        window.location.href = `tel:${phoneNumber}`;
    };
    const handleRateUsClick=()=>{
        const googleMapsUrl = "https://maps.app.goo.gl/ZuS5XfTX5DYakDpV6";
        window.open(googleMapsUrl, '_blank');
    }
    
    return (
        <FooterBox>
            <Tooltip title="Call Us" placement="top" arrow sx={{fontSize:"20px"}} TransitionComponent={Zoom}>
                <IconButton sx={{ border: "2px solid",}} color="primary" onClick={()=>handleCallUsClick()} ><CallIcon /></IconButton>
            </Tooltip>
            <Tooltip title="Rate Us" placement="top" arrow sx={{fontSize:"20px"}} TransitionComponent={Zoom}>
                <Button sx={{ border: "2px solid", }} variant="outlined" onClick={()=>handleRateUsClick()}><RateReviewIcon fontSize="large" /></Button>
            </Tooltip>
        </FooterBox>
    )
}
export default FooterComponent;