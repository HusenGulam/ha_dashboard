import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BaseURLMedia } from '../../../Base/Url';
import { useState } from 'react';



export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ism familya</TableCell>
            <TableCell align="left">Kurslar soni</TableCell>
            <TableCell align="left">Telefon raqam</TableCell>
            <TableCell align="left">Maktab</TableCell>
            <TableCell align="left">Toifasi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.result?.map((row, i) => (
            <TableRow
              key={i}
              style={{ borderColor: 'red' }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderColor: 'blue' }}
            >
              <TableCell component="th" scope="row" style={{ display: 'flex', alignItems: 'center' }}>
                <img style={{ width: '70px', height: "40px", objectFit: 'cover' }} src={`${BaseURLMedia}${row.image}`} alt="" />
                <p style={{ marginLeft: 10 }}>{row.full_name}</p>
              </TableCell>
              <TableCell align="left">{row.course_count}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">{row.school}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
