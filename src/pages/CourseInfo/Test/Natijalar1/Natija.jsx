import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CancelIcon, Container } from './style';
import CustomizedTables from './table';
import useAxios from '../../../../api/useAxios';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: '100%',
  maxWidth:'800px',
  borderRadius:2,
  overflow:'hidden'

};

export default function BasicModal({modal2Visible,setModal2Visible,QuizResultsAll}) {
  const handleClose = () => setModal2Visible(false);
  const Base_style = localStorage.getItem('maktab') !== null ? localStorage.getItem('maktab') : '0';
 

  return (
    <div>
      <Modal
        open={modal2Visible}
        onClose={handleClose}
        style={{zIndex:999999999999}}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{minHeight:600}} sx={style}>
            <Container Base_style={Base_style}>
                <CancelIcon onClick={handleClose} />
                <CustomizedTables QuizResultsAll={QuizResultsAll} Base_style={Base_style}/>
            </Container>
        </Box>
      </Modal>
    </div>
  );
}
