import * as React from 'react';
import { Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Button, styled } from '@mui/material';

const TAX_RATE = 0.07;

const Cell = styled(TableCell)({
    color:'white',
    borderBottom: "1px solid #ffffff4f",
});

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export default function PriceTable({ addedItems }) {

    const rows = addedItems.map((item) => createRow(item.name, item.quantity, item.price));

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    return (
        <TableContainer component={Paper} sx={{mt:1, backgroundColor:"transparent", border:"1px solid #ffffff4f"}}>
            <Table sx={{ minWidth: "272px", }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <Cell align="center" colSpan={3}>
                            Details
                        </Cell>
                        <Cell align="right">Price</Cell>
                    </TableRow>
                    <TableRow>
                        <Cell >Name</Cell>
                        <Cell align="right">Qty.</Cell>
                        <Cell align="right">Unit</Cell>
                        <Cell align="right">Sum</Cell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.desc}>
                            <Cell >{row.desc}</Cell>
                            <Cell align="right">{row.qty}</Cell>
                            <Cell align="right">{row.unit}</Cell>
                            <Cell align="right">{ccyFormat(row.price)}</Cell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <Cell rowSpan={3} />
                        <Cell colSpan={2}>Subtotal</Cell>
                        <Cell align="right">{ccyFormat(invoiceSubtotal)}</Cell>
                    </TableRow>
                    <TableRow>
                        <Cell >Tax</Cell>
                        <Cell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</Cell>
                        <Cell align="right">{ccyFormat(invoiceTaxes)}</Cell>
                    </TableRow>
                    <TableRow>
                        <Cell colSpan={2}>Total</Cell>
                        <Cell align="right">{ccyFormat(invoiceTotal)}</Cell>
                    </TableRow>
                    <TableRow>
                    <Cell colSpan={4} align="right">
                        <Button 
                        // disabled={isCallWaiterButton} 
                        sx={{ fontWeight:"bold" }} variant="contained" 
                        // onClick={()=>onCallWaiterHandle()}
                        >Confirm & Call Waiter</Button>
                    </Cell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}