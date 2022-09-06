import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../App.css'

export default function BasicTable({ data }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" ><b>Order id</b></TableCell>
                        <TableCell align="center"><b>Email</b></TableCell>
                        <TableCell align="center"><b>Product Name</b></TableCell>
                        <TableCell align="center"><b>Order Placed</b></TableCell>
                        <TableCell align="center"><b>Order Status</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            key={row.fields.order_id}
                        >
                            <TableCell align="center" component="th" scope="row">
                                {row.fields.order_id}
                            </TableCell>
                            <TableCell align="center">{row.fields.email}</TableCell>
                            <TableCell align="center">{row.fields.product_name}</TableCell>
                            <TableCell align="center">{row.fields.order_placed}</TableCell>
                            <TableCell align="center">{row.fields.order_status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
