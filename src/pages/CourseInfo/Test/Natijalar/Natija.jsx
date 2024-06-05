import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CancelIcon, Container } from './style';
import CustomizedTables from './table';
import { Accordion, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { LessonWord } from '../../style';
import { EveryBoxInp, InputIn } from '../../../Tafsilot/style';
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
  overflow:'hidden',
  zIndex:9999999999

};

export default function BasicModal({modal2Visible,setModal2Visible,data}) {
  const handleClose = () => setModal2Visible(false);
  const Base_style = localStorage.getItem('maktab') !== null ? localStorage.getItem('maktab') : '0';
  return (
    <div>
      <Modal
        open={modal2Visible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{zIndex:999999999999}}
      >
        <Box sx={style}>
            <Container Base_style={Base_style}>
                <CancelIcon onClick={handleClose} />
                {data?.map((item, index) => (
                              <Accordion key={index} className="myaccordion" style={{background:'#ffffff',boxShadow:'none',borderRadius:3}}>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header"
                                >
                                  <LessonWord>{item.query}</LessonWord>
                                </AccordionSummary>
                                <EveryBoxInp>
                                  <InputIn
                                    cool={item.correct_answer === item.optionA}
                                    placeholder="A"
                                    value={"A. " + item.optionA}
                                    disabled
                                  />
                                  <InputIn
                                    cool={item.correct_answer === item.optionB}
                                    placeholder="B"
                                    value={"B. " + item.optionB}
                                    disabled
                                  />
                                  <InputIn
                                    cool={item.correct_answer === item.optionC}
                                    placeholder="C"
                                    value={"C. " + item.optionC}
                                    disabled
                                  />
                                  <InputIn
                                    cool={item.correct_answer === item.optionD}
                                    placeholder="D"
                                    value={"D. " + item.optionD}
                                    disabled
                                  />
                                </EveryBoxInp>

                                {/* <BottomWrap style={{paddingLeft:13}}>
                                    <AddBtn1 >
                                      Saqlash{" "}
                                    </AddBtn1>
                                  </BottomWrap> */}
                              </Accordion>
                            ))}
            </Container>
        </Box>
      </Modal>
    </div>
  );
}
