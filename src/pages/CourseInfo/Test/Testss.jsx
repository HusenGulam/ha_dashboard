import { ApiFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAxios from "../../../api/useAxios";
import TestModal from "./Modal";
import ResultModal from "./Natijalar/Natija";
import ResultModal1 from "./Natijalar1/Natija";

import {
  Buttons,
  Container,
  InnerContainer,
  LeftWrap,
  MarginLeft10,
  NatijaModal,
  NumberText,
  RightWrap,
  SavolDiv,
  TestContanier,
  TestTitle,
} from "./style";

const Test = () => {
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [questionsDATA, setquestionsDATA] = useState([]);
  const [querydata, setquerydata] = useState([]);
  const {state} = useLocation();
  const {course_id} = useParams();
  const [detail, setdetail] = useState(null)
  const [render, setrender] = useState(false);
  const [QuizResultsAll, setQuizResultsAll] = useState([]);

  const api = useAxios()
  const [QuizID, setQuizID] = useState(null);


  useEffect(() => {
    api.get(`quiz/?course=${state.course.id}`).then((res)=>{
      setquestionsDATA(res.data.data);
    })
  }, []);

  const GetCoursesInDetails =  () => {
    try {
      api.get(`/course/detail/${course_id}/`).then((res)=>{
        if(res.data.success){
          setdetail(res.data.data)
        }
      })
    } catch (error) {
      
    }
}

  const GetResults = async (id) => {
    try {
      const res = await api.get(`/quiz/result/?quiz=${id}`)
      console.log("res======",res);
      if(res.data.success){
        setQuizResultsAll(res.data.data);
        setModal2Visible(true)

      }
    } catch (err) {
      
    }
  }


  const OpenResultModal = (item) => {
    setQuizID(item.id)
    GetResults(item.id)
  }
  useEffect(() => {
    GetCoursesInDetails()
  }, [render]);

  const Base_style =
    localStorage.getItem("maktab") !== null
      ? localStorage.getItem("maktab")
      : "0";

  const OpenShowQuestionModal = (item) => {
    setModal1Visible(true);
    setquerydata(item.questions)
  };
  return (
    <React.Fragment>
      <NatijaModal className="thisiscool">
        <ResultModal
          modal2Visible={modal1Visible}
          data={querydata}
          setModal2Visible={setModal1Visible}
        />
        <ResultModal1
         modal2Visible={modal2Visible}
         setModal2Visible={setModal2Visible} 
         QuizResultsAll={QuizResultsAll}
        />
      </NatijaModal>
      <Container>
        {questionsDATA?.map((item, index) => (
          <TestContanier>
            <InnerContainer>
              <LeftWrap>
                <NumberText baseStyle={Base_style}>
                  {item.questions?.length}
                </NumberText>
                <MarginLeft10>
                  <TestTitle>{item.title}</TestTitle>
                  <SavolDiv baseStyle={Base_style}>
                    O'tish foizi: {item.passed_percent}%
                  </SavolDiv>
                  <SavolDiv baseStyle={Base_style}>
                    Vaqt: {item.time}minut
                  </SavolDiv>
                </MarginLeft10>
              </LeftWrap>
              <RightWrap>
                <Buttons
                  onClick={() => OpenResultModal(item)}
                  baseStyle={Base_style}
                >
                  Natijalar
                </Buttons>
                <Buttons
                  onClick={() => OpenShowQuestionModal(item)}
                  baseStyle={Base_style}
                >
                  Savollar
                </Buttons>
              </RightWrap>
            </InnerContainer>
          </TestContanier>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Test;
