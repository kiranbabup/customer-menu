import * as React from 'react';
import { Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from '@mui/material';

const TAX_RATE = 0.07;

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
        <TableContainer component={Paper} sx={{mt:1, backgroundColor:"transparent", border:"1px solid #ffffffa6"}}>
            <Table sx={{ minWidth: "272px", }} aria-label="spanning table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color:'white'}} align="center" colSpan={3}>
                            Details
                        </TableCell>
                        <TableCell sx={{color:'white'}} align="right">Price</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{color:'white'}} >Name</TableCell>
                        <TableCell sx={{color:'white'}} align="right">Qty.</TableCell>
                        <TableCell sx={{color:'white'}} align="right">Unit</TableCell>
                        <TableCell sx={{color:'white'}} align="right">Sum</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.desc}>
                            <TableCell sx={{color:'white'}} >{row.desc}</TableCell>
                            <TableCell sx={{color:'white'}} align="right">{row.qty}</TableCell>
                            <TableCell sx={{color:'white'}} align="right">{row.unit}</TableCell>
                            <TableCell sx={{color:'white'}} align="right">{ccyFormat(row.price)}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell sx={{color:'white'}} rowSpan={3} />
                        <TableCell sx={{color:'white'}} colSpan={2}>Subtotal</TableCell>
                        <TableCell sx={{color:'white'}} align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{color:'white'}} >Tax</TableCell>
                        <TableCell sx={{color:'white'}} align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                        <TableCell sx={{color:'white'}} align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{color:'white'}} colSpan={2}>Total</TableCell>
                        <TableCell sx={{color:'white'}} align="right">{ccyFormat(invoiceTotal)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}