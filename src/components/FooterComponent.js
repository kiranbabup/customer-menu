import { Box, Button, styled } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';

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
        // Replace the phone number with your desired number
        const phoneNumber = "8374409756";
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <FooterBox>
            <Button variant="outlined" startIcon={<CallIcon />} onClick={handleCallUsClick}>Call Us</Button>
        </FooterBox>
    )
}
export default FooterComponent;