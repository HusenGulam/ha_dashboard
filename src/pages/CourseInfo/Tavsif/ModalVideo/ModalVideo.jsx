import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CancelIcon, Container, Title } from './style';
import Video from './Player';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: '100%',
  maxWidth: '800px',
  borderRadius: 2,
  overflow: 'hidden',
  zIndex: '9999999999909 !important'

};

export default function BasicModal({ modalVisible, setmodalVisible, video_url }) {
  const handleClose = () => setmodalVisible(false);

  return (
    <div>
      <Modal
        open={modalVisible}
        style={{zIndex:999999999999}}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={{ backgroundColor: '#000' }} sx={style}>
          <Container >
            <CancelIcon onClick={handleClose} />
            <Video video_url={video_url} show={modalVisible} setshow={setmodalVisible} />
          </Container>
        </Box>
      </Modal>
    </div>
  );
}