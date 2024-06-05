import { Button } from '@mui/material'
import React from 'react'
import SortIcon from '@mui/icons-material/Sort';
import { AddButton, AddContainer, Container, CustomWrapper, MainText, MuiButton, TableDivContianer, TableTitle, TableWrapper } from './style'
import BasicTable from './Table/Table';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
   const navigator = useNavigate();

   const clickAddCourse = () => {
      localStorage.removeItem('course_id')
      localStorage.removeItem('active_step')
      navigator("/dashboard/addcourse")
   }
   return (
      <Container>
         <CustomWrapper>
            <AddContainer>
               <AddButton onClick={() => clickAddCourse()}>Kurs qo’shish</AddButton>
            </AddContainer>
            <TableDivContianer>
               <TableTitle>
                  <MainText>Mening kurslarim</MainText>
                  <MuiButton variant="contained" startIcon={<SortIcon />}>
                     Filter
                  </MuiButton>
               </TableTitle>
               <TableWrapper>
                  <BasicTable />
               </TableWrapper>
            </TableDivContianer>
         </CustomWrapper>
      </Container>
   )
}

export default MyCourses