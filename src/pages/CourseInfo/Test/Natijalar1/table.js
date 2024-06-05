import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ResultsData } from './natdata';
import { NodeIndexOutlined } from '@ant-design/icons';
import { BaseURLMedia } from '../../../../Base/Url';

import boy from '../../../../assets/images/lesson/boy.png';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor:'#EDEDFA',
    height: '30px'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables({Base_style,QuizResultsAll}) {
    const ID = localStorage.getItem('user1') !==null ? JSON.parse(localStorage.getItem('user1')) : 0;


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor:Base_style == '1' ?  '#EE6C34' : Base_style == '2' ?  '#0BA7BF'  : Base_style == '3' ? '#0BA7BF' : '#1D794E'  ,
          color: theme.palette.common.white, 
          height:'60px',
          
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
  return (
    <TableContainer className='myrestable' component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead  >
          <TableRow>
            <StyledTableCell colSpan={1} align="left">#</StyledTableCell>
            <StyledTableCell colSpan={5} align="center">Avatar</StyledTableCell>
            <StyledTableCell colSpan={3} align="center">Familiya / Ism</StyledTableCell>
            <StyledTableCell colSpan={3} align="center">Ball</StyledTableCell>
            <StyledTableCell colSpan={3} align="center">O'tdi yoki O'tolmadi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {ResultsData?.map((row,index) => (
            <StyledTableRow key={index} style={{backgroundColor:row.name === 'Dostonbek Abdumuxtorov' ? "orange" : ''}}>
              <StyledTableCell colSpan={1} align="left">{row.id}</StyledTableCell>
              <StyledTableCell colSpan={5} align="center">
                <img style={{width:40,height:40,objectFit:'cover'}} src={row.img} />
              </StyledTableCell>
              <StyledTableCell colSpan={3} align="center">{row.name}</StyledTableCell>
              <StyledTableCell colSpan={3} align="center">{row.score}</StyledTableCell>
              <StyledTableCell colSpan={3} align="center">{row.finish_time}</StyledTableCell>
            </StyledTableRow>
          ))} */}
          {
            QuizResultsAll?.map((row,index)=>(
              <StyledTableRow key={index} style={{backgroundColor:row.student?.id === ID?.id ? "orange" : ''}}>
              <StyledTableCell colSpan={1} align="left">{index+1}</StyledTableCell>
              <StyledTableCell colSpan={5} align="center">
                <img style={{width:40,height:40,objectFit:'cover',borderRadius:'100%'}} src={row.student.image === null ? boy : BaseURLMedia+row.student.image} />
              </StyledTableCell>
              <StyledTableCell colSpan={3} align="center">{row?.student?.full_name}</StyledTableCell>
              <StyledTableCell colSpan={3} align="center">{row.mark}%</StyledTableCell>
              <StyledTableCell colSpan={3} align="center">{row.is_passed ? "O'tdi" : "O'tolmadi"}</StyledTableCell>
            </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
