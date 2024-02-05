import { Box, Button, styled } from "@mui/material";
import RKLogo from "../assets/images/logo.png"
import { useState } from "react";
const HeaderComponent = ()=>{
    const HeaderBox = styled(Box)({
        width: "100%", 
        height: "50px", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        borderBottom:"1px dashed gray"
    })
    const [isCallWaiterButton, setIsCallWaiterButton] = useState(false)
    const onCallWaiterHandle = ()=>{
        setIsCallWaiterButton(true);
        setTimeout(() => {
            setIsCallWaiterButton(false);
        // }, 300000); //5min
        }, 60000); //1min

    }
    return(
        <HeaderBox>
            <Box component="img" sx={{ height: "80%", marginLeft: "2%" }} alt="Header Logo" src={RKLogo} />
            <Button disabled={isCallWaiterButton} sx={{ minWidth:"110px", height: "60%", marginRight: "4%", border:"2px solid", fontWeight:"bold" }} variant="outlined" onClick={()=>onCallWaiterHandle()}>Call Waiter</Button>
        </HeaderBox>
    )
}
export default HeaderComponent;