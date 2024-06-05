import { DeleteFilled, EditOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { AddBtn, AddBtnedit, AddBtnred, Bolimtext, Buttons, ContentContainer, InnerContainer, LeftWrap, MarginLeft10, NextButton, NumberText, RightWrap, SavolDiv, TestBottom, TestContanier, TestTitle, ThirdContainer } from '../style'
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import QuizAddModal from './QuizAddModal';
import useAxios from '../../../api/useAxios';
import { useEffect } from 'react';
import QuizEditModal from './QuizEditModal';
import Swal from 'sweetalert2';
import QuestionAddModal from './QuestionAddModal';
import QuestionsModal from './QuestionsModal';
import { Box } from '@mui/material';
import Loading from '../../../components/Loading/Loading';
export default function Quiz({ course_id, handleNext }) {

    const api = useAxios()

    const [quizes, setQuizes] = useState([])

    const [render, setRender] = useState(false)

    //modal state
    const [addQuizModal, setAddQuizModal] = useState(false)
    const [editQuizModal, setEditQuizModal] = useState(false)
    const [addQuestionModal, setAddQuestionModal] = useState(false)
    const [editQuestionModal, setEditQuestionModal] = useState(false)
    const [questionModal, setQuestionModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [editQuizItem, setEditQuizItem] = useState(null)

    const [quiz, setQuiz] = useState(null)



    const get_quizes = async () => {
        let res = await api.get('/quiz/', { params: { course: course_id } })
        if (res.data.success) {
            setQuizes(res.data.data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        get_quizes()
    }, [course_id, render])


    const AddQuiz = async (data) => {
        let res = await api.post('/quiz/', data)
        console.log(res.data);
        if (res.data.success) {

            setRender(!render)
            setAddQuizModal(false)
        }
    }

    const OpenAddQuizModal = () => {
        setAddQuizModal(true)
    }

    const EditQuiz = async (data, id) => {
        let res = await api.put(`/quiz/${id}/`, data)
        if (res.data.success) {
            setRender(!render)
            setEditQuizModal(false)
        }
    }

    const OpenEditQuizModal = (item) => {
        setEditQuizItem(item)
        setEditQuizModal(true)
    }

    const closeEditQuizModal = () => {
        setEditQuizItem(null)
        setEditQuizModal(false)
    }

    const DeleteQuiz = (item) => {
        Swal.fire({
            title: 'Ishonchingiz komilmi?',
            text: `siz ${item.title}ni o'chirmoqchisiz!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ha',
            cancelButtonText: "Yo'q"
        }).then(async (result) => {
            if (result.isConfirmed) {
                let res = await api.delete(`/quiz/${item.id}/`)
                if (res.data.success === true) {
                    Swal.fire(
                        "O'chirildi",
                        "Ma'lumot o'chirildi.",
                        'success'
                    )
                    setRender(!render);
                } else {
                    Swal.fire(
                        'Xatolik!',
                        "O'chirishda qandaydur xatolik mavjud!",
                        'error'
                    )
                }

            }
        })
    }

    const OpenQuestionModal = (item) => {
        setQuestionModal(true)
        setQuiz(item)
    }

    const OpenAddQuestionModal = (item) => {
        setQuiz(item)
        setAddQuestionModal(true)
    }

    const closeAddQuestionModal = () => {
        setAddQuestionModal(false)
        setQuiz(null)
        
    }

    const OpenEditQuestionModal = () => {

    }

    const AddQuestion = async (data) => {
        let res = await api.post('/question/', data)
        if (res.data.success) {
            setRender(!render)
            closeAddQuestionModal()
        }
    }

    const CloseQuestionModal = () => {
        setQuestionModal(false)
        setQuiz(null)
        setRender(!render)
    }


    const EditQuestion = async (data, id) => { }


    return (
        <>
            {isLoading ? <Loading /> :
                <React.Fragment>
                    <ContentContainer>
                        <ThirdContainer>
                            <Bolimtext>Barcha testlar</Bolimtext>
                            <AddBtn
                                onClick={() => OpenAddQuizModal()}
                                startIcon={<ControlPointIcon />}
                            >
                                Test qo’shish{" "}
                            </AddBtn>
                        </ThirdContainer>
                        {quizes?.map((item, index) => (
                            <div>
                                <TestContanier>
                                    <InnerContainer>
                                        <LeftWrap>
                                            <NumberText >
                                                {item.questions?.length}
                                            </NumberText>
                                            <MarginLeft10>
                                                <TestTitle>{item.title}</TestTitle>
                                                <SavolDiv >
                                                    O'tish foizi: {item.passed_percent}%
                                                </SavolDiv>
                                                <SavolDiv>
                                                    Vaqt: {item.time}minut
                                                </SavolDiv>
                                            </MarginLeft10>
                                        </LeftWrap>
                                        <RightWrap>
                                            <Buttons
                                                onClick={() => OpenQuestionModal(item)}
                                            >
                                                Savollar
                                            </Buttons>
                                            <Buttons
                                                onClick={() => OpenAddQuestionModal(item)}
                                            >
                                                Savol qo'shish
                                            </Buttons>
                                        </RightWrap>
                                    </InnerContainer>
                                </TestContanier>
                                <TestBottom>
                                    <AddBtnedit
                                        style={{ marginRight: 20 }}
                                        onClick={() => OpenEditQuizModal(item)}
                                        startIcon={<EditOutlined />}
                                    >
                                        Testni tahrirlash{" "}
                                    </AddBtnedit>
                                    <AddBtnred
                                        onClick={() => DeleteQuiz(item)}
                                        startIcon={<DeleteFilled />}
                                    >
                                        Testni o'chirish{" "}
                                    </AddBtnred>
                                </TestBottom>
                            </div>
                        ))}
                    </ContentContainer>
                    <QuizAddModal open={addQuizModal} close={() => setAddQuizModal(false)} course_id={course_id} AddQuiz={AddQuiz} />
                    <QuizEditModal open={editQuizModal} close={closeEditQuizModal} item={editQuizItem} course_id={course_id} EditQuiz={EditQuiz} />

                    <QuestionsModal open={questionModal} close={CloseQuestionModal} item={editQuizItem} quiz={quiz} />
                    <QuestionAddModal open={addQuestionModal} close={closeAddQuestionModal} quiz={quiz} handleSubmit={AddQuestion} />
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <NextButton
                            color="inherit"
                            type='button'
                            sx={{ mr: 1 }}
                            onClick={() => handleNext(1)}
                        >
                            Ortga
                        </NextButton>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <NextButton variant="contained" onClick={() => handleNext(3)} >
                            Keyingi
                        </NextButton>
                    </Box>
                </React.Fragment>}</>
    )
}
