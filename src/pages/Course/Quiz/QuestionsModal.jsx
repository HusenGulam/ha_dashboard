import { Accordion, AccordionSummary, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { AddBtn1, AddBtnred, BottomWrap, EveryBoxInp, InputIn, JustP, LessonWord, MainHeight } from '../style'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useAxios from '../../../api/useAxios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import QuestionEditModal from './QuestionEditModal';
import Loading from '../../../components/Loading/Loading';
import parse from 'html-react-parser';


import { Fraction, toTex } from 'algebra.js';
import MathJax  from 'react-mathjax';
import CkeditorComponent from '../Ckeditor/Ckeditor';


export default function QuestionsModal(props) {
    const api = useAxios()
    const [questions, setQuestions] = useState([])
    const [editModal, setEditModal] = useState(false)
    const [editItem, setEditItem] = useState(null)
    const [render, setRender] = useState(false)
    const [isLoading, setisLoading] = useState(true);

    const node = React.createRef();
    const renderMath = () => {
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, node.current]);
    };
    useEffect(() => {
        renderMath();
    });

    const get_question = async () => {
        setisLoading(true)
        let res = await api.get(`/question/`, { params: { quiz: props?.quiz?.id } })
        if (res.data.success) {
            setQuestions(res.data.data)
            setisLoading(false)
        }
    }

    useEffect(() => { get_question() }, [props, render])

    const openEditModal = (item) => {
        setEditModal(true)
        setEditItem(item)
    }



    const closeEditModal = () => {
        setEditModal(false)
        setEditItem(null)
    }

    const DeleteQuestion = async (item) => {
        let res = await api.delete(`/question/${item.id}/`)
        if (res.data.success === true) {
            setRender(!render);
        }

    }

    const EditQuestion = async (data, id) => {
        let res = await api.put(`/question/${id}/`, data)
        if (res.data.success) {
            setRender(!render)
            closeEditModal()
        }
    }

    return (
        <Dialog
            style={{ zIndex: 99999999999}}
            open={props?.open}
        >
            <DialogTitle
                style={{ fontFamily: "Lexend", paddingLeft: 33 }}
            >
                Savollar
            </DialogTitle>
            <DialogContent>
                <MainHeight>
                    {isLoading ? <Loading /> : <>
                        {questions?.map((item, index) => (
                            <Accordion key={item.id} className="myaccordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    {/* <CkeditorComponent desc={item.query}   /> */}
                                        
                                    <LessonWord  dangerouslySetInnerHTML={{ __html:item.query }} ref={node}  >

                                    </LessonWord>
                                </AccordionSummary>
                                <EveryBoxInp>
                                   {/* <JustP cool={item.correct_answer === item.optionA}>
                                     A.<CkeditorComponent desc={`asds${item.optionA}`}   />
                                   </JustP>
                                   <JustP cool={item.correct_answer === item.optionB}>
                                     B.<CkeditorComponent desc={`${item.optionB}`}   />
                                   </JustP>
                                   <JustP cool={item.correct_answer === item.optionC}>
                                     C.<CkeditorComponent desc={`${item.optionC}`}   />
                                   </JustP>
                                   <JustP cool={item.correct_answer === item.optionD}>
                                     D.<CkeditorComponent desc={`${item.optionD}`}   />
                                   </JustP> */}
                                    
                                   
                                    <JustP 
                                        ref={node} 
                                        dangerouslySetInnerHTML={{ __html:item.optionA }} 
                                        cool={item.correct_answer === item.optionA}
                                    >
                                    </JustP>
                                    <JustP 
                                        ref={node} 
                                        cool={item.correct_answer === item.optionB}
                                        dangerouslySetInnerHTML={{ __html:item.optionB }} 
                                    >

                                    </JustP>
                                    <JustP 
                                        ref={node} 
                                        cool={item.correct_answer === item.optionC}
                                        dangerouslySetInnerHTML={{ __html:item.optionC }} 
                                    >

                                    </JustP>
                                    <JustP 
                                        ref={node} 
                                        cool={item.correct_answer === item.optionD}
                                        dangerouslySetInnerHTML={{ __html:item.optionD }} 
                                    >
                                    </JustP>
                                </EveryBoxInp>

                                <BottomWrap style={{ paddingLeft: 13 }} >
                                    <AddBtn1 onClick={() => openEditModal(item)}>
                                        Tahrirlash{" "}
                                    </AddBtn1>
                                    <AddBtnred style={{ marginLeft: 10 }} onClick={() => DeleteQuestion(item)}>
                                        O'chirish{" "}
                                    </AddBtnred>
                                </BottomWrap>
                            </Accordion>
                        ))}</>}
                </MainHeight>
            </DialogContent>
            <DialogActions
                style={{ paddingRight: 25, paddingBottom: 15 }}
            >
                <Button variant="outlined" onClick={props?.close}>
                    Bekor qilish
                </Button>
                <Button variant="contained" onClick={props?.close}>
                    Yopish
                </Button>
            </DialogActions>
            <QuestionEditModal open={editModal} close={closeEditModal} item={editItem} quiz={props?.quiz} handleSubmit={EditQuestion} />
        </Dialog>
    )
}
