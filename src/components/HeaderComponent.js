import { Box, Button, Typography, styled } from "@mui/material";
import RKLogo from "../assets/images/logo.png"
import { useEffect, useState } from "react";

const HeaderComponent = () => {
    const HeaderBox = styled(Box)({
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px dashed gray"
    })
    
    const [isButtonDisplay, setButtonDisplay] = useState(true);
    const [timer, setTimer] = useState(60);
    const [isActive, setIsActive] = useState(false);

    const onCallWaiterHandle = () => {
        setButtonDisplay(false);
        setIsActive(true);
        setTimer(60);
        setTimeout(() => {
            setButtonDisplay(true);
        }, 60000); //1min
    }

    useEffect(() => {
        let interval;
        if (timer > 0 && isActive) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }else if (timer === 0 && isActive) {
            setIsActive(true);
          }
        return () => clearInterval(interval);
    }, [timer, isActive]);

    return (
        <HeaderBox>
            <Box component="img" sx={{ height: "80%", marginLeft: "2%" }} alt="Header Logo" src={RKLogo} />
            <Typography sx={{ border: "1px dashed #ffffff4f", padding: "4px", borderRadius: "5px" }}>Table No. 1</Typography>
            {
                isButtonDisplay ?
                    <Button sx={{ minWidth: "110px", height: "60%", marginRight: "4%", border: "2px solid", fontWeight: "bold" }} variant="outlined" onClick={() => onCallWaiterHandle()}>Call Waiter</Button>
                    : 
                    <Typography sx={{ minWidth: "110px", marginRight: "4%", color: "yellow", textAlign:"center" }}>{timer}s</Typography> 
            }
        </HeaderBox>
    )
}
export default HeaderComponent;