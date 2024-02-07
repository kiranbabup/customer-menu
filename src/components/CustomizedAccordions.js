import * as React from 'react';
import { Box, Typography, styled } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { foodList } from '../assets/data/constants';
import PriceTable from './PriceTable';
import MenuDetails from './MenuDetails';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid #ffffff4f`,
    borderRadius: "5px",
    marginBottom: "5px",
    '&::before': {
        display: 'none',
    },
    backgroundColor: 'transparent',
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.5rem', color: "white" }} />}
        {...props}
    />
))(({ theme, expanded }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'transparent',
    flexDirection: 'row',
    color: theme.palette.common.white,
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    borderBottom: expanded ? '1px dashed #ffffff4f' : 'none',
}));

export default function CustomizedAccordions({setButtonDisplay}) {
    const [expanded, setExpanded] = React.useState('panel1');
    const [addedItems, setAddedItems] = React.useState([]);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const getFilteredItemsByType = (type, isVeg) => {
        return foodList.filter((item) => item.type === type && item.isveg === isVeg);
    };

    const onAddClicked = (item) => {
        const existingItemIndex = addedItems.findIndex((addedItem) => addedItem.name === item.name);
        if (existingItemIndex !== -1) {
            const updatedItems = [...addedItems];
            updatedItems[existingItemIndex].quantity += 1;
            setAddedItems(updatedItems);
            setButtonDisplay(false);
        } else {
            setAddedItems([...addedItems, { ...item, quantity: 1 }]);
            setButtonDisplay(false);
        }
    }

    const onRemoveClicked = (item) => {
        const existingItemIndex = addedItems.findIndex((addedItem) => addedItem.name === item.name);
        if (existingItemIndex !== -1) {
            const updatedItems = [...addedItems];
            if (updatedItems[existingItemIndex].quantity > 1) {
                updatedItems[existingItemIndex].quantity -= 1;
            } else {
                updatedItems.splice(existingItemIndex, 1);
            }
                setAddedItems(updatedItems);
        }
    };
    React.useEffect(()=>{
        if(addedItems.length === 0){
            setButtonDisplay(true);
        }
    },[addedItems]);

    return (
        <Box sx={{ paddingLeft: 3, paddingRight: 3, paddingBottom: 1  }}>
            {Array.from(new Set(foodList.map((item) => item.type))).map((type, index) => (
                <Box key={type}>
                    <Typography sx={{ fontWeight: "bold", fontSize: "15px", pl: 2, pt: 1, textAlign: "center" }}>{type}</Typography>
                    <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                        <AccordionSummary expanded={expanded === `panel${index + 1}`} aria-controls={`panel${index + 1}-veg-content`} id={`panel${index + 1}-veg-header`}>
                            <Typography>{type} - Veg ({getFilteredItemsByType(type, true).length})</Typography>
                        </AccordionSummary>
                        {getFilteredItemsByType(type, true).map((item) => (
                            <MenuDetails key={item.name} item={item} addedItems={addedItems} onAddClicked={onAddClicked} onRemoveClicked={onRemoveClicked} />
                        ))}
                    </Accordion>
                    <Accordion expanded={expanded === `panel${index + 2}-non-veg`} onChange={handleChange(`panel${index + 2}-non-veg`)}>
                        <AccordionSummary expanded={expanded === `panel${index + 2}-non-veg`} aria-controls={`panel${index + 2}-non-veg-content`} id={`panel${index + 2}-non-veg-header`}>
                            <Typography>{type} - Non Veg ({getFilteredItemsByType(type, false).length})</Typography>
                        </AccordionSummary>
                        {getFilteredItemsByType(type, false).map((item) => (
                            <MenuDetails key={item.name} item={item} addedItems={addedItems} onAddClicked={onAddClicked} onRemoveClicked={onRemoveClicked} />
                        ))}
                    </Accordion>
                </Box>
            ))}
            {
                addedItems.length > 0 &&
                <PriceTable addedItems={addedItems} />
            }
            {/* {
                addedItems.map(item => {
                    return (
                        <Box sx={{ display: "flex", gap: "1rem", justifyContent: "end", alignItems: "center", mt: 1 }}>
                            <Typography >{item.name}</Typography>
                            <Typography>Quantity:{item.quantity}</Typography>
                            <Typography>Price:{item.quantity * item.price} </Typography>
                        </Box>
                    )
                })
            } */}
        </Box>
    );
}
