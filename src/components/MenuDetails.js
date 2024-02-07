import { Box, Button, Typography, styled } from "@mui/material";
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    // backgroundImage: 'linear-gradient(to top, yellow, black)',
    // color:"white",
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
}));

const MenuDetails = ({ item, addedItems, onAddClicked, onRemoveClicked }) => {
    const existingItem = addedItems.find((addedItem) => addedItem.name === item.name);
    return (
        <AccordionDetails key={item.name}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap:"5px"}}>
                    <StopCircleOutlinedIcon color={item.isveg ? "success" : "error"} />
                    {/* <Box component="img"
                        sx={{
                            width: "4rem", height: "4rem",
                        }}
                        alt="Food Item Image"
                        src={item.imgurl} /> */}
                    <Typography>{item.name}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap:"5px"}}>
                    <Typography> Rs.{item.price}/- </Typography>
                    {existingItem ? (
                        <Box sx={{ padding: "5px", display: "flex", gap: "5px", border: "1px solid lightgray", borderRadius: "20px" }}>
                            <RemoveIcon onClick={() => onRemoveClicked(item)} color='error' />
                            <Typography>{existingItem.quantity}</Typography>
                            <AddIcon onClick={() => onAddClicked(item)} color='success' />
                        </Box>
                    ) : (
                        <Button variant='contained' onClick={() => onAddClicked(item)}>Add</Button>
                    )}
                </Box>
            </Box>
            {/* <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}> */}
            {/* <Box sx={{ width: "5rem", height: "3rem", display: "flex", justifyContent: "center", alignItems: "center" }}> */}
            {/* <Box component="img"
                        sx={{
                            width: "4rem", height: "4rem",
                            // height: 233,
                            // width: 350,
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="Food Item Image"
                        src={item.imgurl} /> */}
            {/* </Box> */}

            {/* </Box> */}
        </AccordionDetails>
    )
}
export default MenuDetails;