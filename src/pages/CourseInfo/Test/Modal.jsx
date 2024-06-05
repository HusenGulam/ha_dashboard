import { Button, Modal } from "antd";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Progress, Tooltip } from "antd";
import {
  AnsText,
  AnswerBox,
  AnswerDiv,
  AnswerScores,
  Centering,
  Centering1,
  Circle,
  Container,
  Dumaloq,
  DumaloqText,
  DumaloqTitle,
  NextButton,
  PercentBox,
  PercentText,
  ProgressWrap,
  QuestionText,
  ResultBox,
  ScoreShowText,
  TestTitle,
  TextBox,
} from "./modalstyle";
import {
  Box,
  LinearProgress,
} from "@mui/material";
import { TestDATA } from "./data";
import {CustomizedProgressBars,CustomizedProgressBars2} from './loading'

const TestModal = ({ modal2Visible, setModal2Visible }) => {
  const [TestIndex, setTestIndex] = useState(0)
  const [choosen, setchoosen] = useState('');
  const [isloading, setisloading] = useState(false)
  const [btnWord, setbtnWord] = useState('Keyingi');
  const [isResultLoading, setisResultLoading] = useState('test');
  const [persentnum, setpersentnum] = useState(0);
  let bgcolor = 'linear-gradient(180deg, #F17120 0%, #F27221 51.04%, #D75706 100%)'
  const Base_style = localStorage.getItem('maktab') !== null ? localStorage.getItem('maktab') : '0';

  function GetPercent(len,mul) {
    setpersentnum(Math.round((100/len)*mul)) 
  }

  function Choosee(z) {
    setchoosen(z.id)
    GetPercent(TestDATA.length,TestIndex+1)
  }


  


  function NextTest() {
    if(isResultLoading==='result'){
      setModal2Visible(false)
    }else{
      if(TestIndex+1<TestDATA.length){
        setisloading(true)
        setchoosen('')
        setTestIndex(TestIndex+1)
        
      }else{
        setisResultLoading('check')
        setbtnWord('Tekshirilmoqda...')
        setTimeout(() => {
           setisResultLoading('result')
           setbtnWord('Tugatish')
        }, 2000);
      }
      setTimeout(() => {
        setisloading(false)
      }, 500);
    }
  }

  const ChoicesReturn = (item) => {
    return item.map((ch,index) => (
     
        <AnswerDiv isSelected={choosen==ch.id ? '2px solid rgba(241, 113, 32, 1)' : ''} onClick={()=>Choosee(ch)} key={index}>
          <Circle Base_style={Base_style} isSelected={choosen==ch.id ? bgcolor : ''}></Circle>
          <AnsText>{ch.name}</AnsText>
        </AnswerDiv>
      )
    );
  };

  return (
    <>
      <Modal
        centered
        visible={modal2Visible}
        closeIcon={
          <CloseRoundedIcon
            style={{
              marginRight: -10,
              fontSize: 30,
              color: "#B34714",
              marginTop: 7,
            }}
            onClick={() => {
              setModal2Visible(false);
              setTestIndex(0)
              setchoosen('')

            }}
          />
        }
        onOk={() => setModal2Visible(false)}
        footer={false}
        width={700}
      >
        <Container>
          {isResultLoading==='result' ? '' : <ProgressWrap>
            <Tooltip title="3 done / 3 in progress / 4 to do">
              <Box sx={{ width: "87%" }}>
                <LinearProgress
                  style={{
                    height: 13,
                    borderRadius: 10,
                    backgroundColor: "#D9F6FF",
                  }}
                  variant="determinate"
                  value={persentnum}
                />
              </Box>
            </Tooltip>
            <Progress
              type="circle"
              trailColor="white"
              width={40}
              percent={persentnum}
            />
          </ProgressWrap>
          }
          <TestTitle>
            {
              isResultLoading === 'check' ? "Natijangiz tekshirilmoqda" :
              isResultLoading === 'test' ? 'Htmlga oid savollar' : 'Frontend test topshiriq natijasi'
            }
          </TestTitle>
          <Centering>
            {
              isResultLoading === 'check' ?
               <CustomizedProgressBars2 />
                :
              isResultLoading === 'test' ? 
              <TextBox>
                { isloading ?
                  <CustomizedProgressBars />
                  :
                  <div>
                    <QuestionText>
                      {TestIndex+1}. {TestDATA[TestIndex].question}
                    </QuestionText>
                    <AnswerBox>
                      {ChoicesReturn(TestDATA[0].choice)}
                    </AnswerBox>
                  </div>
                }
              </TextBox>
              : <ResultBox>
                  <PercentBox>
                      <Dumaloq>
                        <DumaloqText>11/30</DumaloqText>
                        <DumaloqTitle>38%</DumaloqTitle>
                      </Dumaloq>
                      <PercentText>Boshlang’ich</PercentText>
                  </PercentBox>
                  <AnswerScores>
                    <ScoreShowText isThat={'#2930C4'}>28%-45% <br /> Boshlang’ich</ScoreShowText>
                    <ScoreShowText>45%-65% <br /> O’rta</ScoreShowText>
                    <ScoreShowText>65%-100% <br /> Yuqori</ScoreShowText>
                  </AnswerScores>
                </ResultBox>

            }
          </Centering>
          <Centering1>
                  <NextButton  Base_style={Base_style} onClick={NextTest}>{btnWord}</NextButton>
          </Centering1>
        </Container>
      </Modal>
    </>
  );
};

export default TestModal;
