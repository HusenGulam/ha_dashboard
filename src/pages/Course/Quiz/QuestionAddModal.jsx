import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Bolimtext, DivOfVariantDiv, InputVar, InputVar1, MyDiv, Savollartext, VariantAddingWrapper } from '../style';
import CkeditorComponent from '../../Tafsilot/components/Ckeditor/Ckeditor';
import Swal from 'sweetalert2';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export default function QuestionAddModal(props) {
    const [query, setQuery] = useState('')
    const [optionA, setOptionA] = useState('')
    const [optionB, setOptionB] = useState('')
    const [optionC, setOptionC] = useState('')
    const [optionD, setOptionD] = useState('')
    const [correct_answer, setCorrectAnswer] = useState(null)
    const [checkCode, setCheckCode] = useState(1)
    const ChangeChekCode = (code) => {
        setCheckCode(code);
        if (code == 1) {
            setCorrectAnswer(optionA)
        } else if (code == 2) {
            setCorrectAnswer(optionB)
        } else if (code == 3) {
            setCorrectAnswer(optionC)
        } else (
            setCorrectAnswer(optionD)
        )
    };

    useEffect(() => {
        setQuery('')
        setOptionA('')
        setOptionB('')
        setOptionC('')
        setOptionD('')
        setCorrectAnswer('')
    }, [props])

    useEffect(() => {
        if (checkCode == 1) {
            setCorrectAnswer(optionA)
        } else if (checkCode == 2) {
            setCorrectAnswer(optionB)
        } else if (checkCode == 3) {
            setCorrectAnswer(optionC)
        } else (
            setCorrectAnswer(optionD)
        )
    }, [optionA, optionB, optionC, optionD])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(optionA=='' || optionB=='' || optionC=='' || optionD=='' || query ==''){
            Swal.fire({
                icon: 'warning',
                title: 'Warning',
                text: "Savol va javob fieldlarini to'ldiring",
                confirmButtonText: 'Okay!',
              })
        }else{
            let formData = new FormData()
            formData.append('quiz', props?.quiz?.id)
            formData.append('query', query)
            formData.append('optionA', optionA)
            formData.append('optionB', optionB)
            formData.append('optionC', optionC)
            formData.append('optionD', optionD)
            formData.append('correct_answer', correct_answer)
            setCheckCode(1)
            props.handleSubmit(formData)
        }
    }

    return (
        <Modal
            style={{ zIndex: 999999999  }}
            
            className="dialog__modal"
            open={props?.open}
        >
            <form onSubmit={handleSubmit}>
                <Savollartext>Savolni kiriting</Savollartext>
                <DialogContent >
                    <DialogContentText>
                    </DialogContentText>
                    <VariantAddingWrapper>
                        <DivOfVariantDiv>
                            {/* <InputVar1
                                value={query}
                                onChange={(e) =>
                                    setQuery(e.target.value)
                                }
                                placeholder="Savolni kiriting"
                            /> */}
                            <CkeditorComponent desc={query} setDesc={setQuery}/>

                        </DivOfVariantDiv>
                        <Bolimtext>Variant qo'shish</Bolimtext>
                        <DivOfVariantDiv>
                            {/* <InputVar
                                placeholder="A"
                                value={optionA}
                                onChange={(e) => setOptionA(e.target.value)}
                            /> */}
                            A.
                            <MyDiv>
                               <CkeditorComponent desc={optionA} setDesc={setOptionA}/>
                            </MyDiv>

                            <Checkbox
                                name="mea"
                                checked={checkCode == 1 ? true : false}
                                onChange={(e) => ChangeChekCode(1)}
                            />
                        </DivOfVariantDiv>
                        <DivOfVariantDiv>
                            {/* <InputVar
                                placeholder="B"
                                value={optionB}
                                onChange={(e) => setOptionB(e.target.value)}
                            /> */}
                             B.
                             <MyDiv>
                                <CkeditorComponent desc={optionB} setDesc={setOptionB} place={'B'} />
                             </MyDiv>

                            <Checkbox
                                name="meb"
                                checked={checkCode == 2 ? true : false}
                                onChange={(e) => ChangeChekCode(2)}
                            />
                        </DivOfVariantDiv>
                        <DivOfVariantDiv>
                            {/* <InputVar
                                placeholder="C"
                                value={optionC}
                                onChange={(e) => setOptionC(e.target.value)}
                            /> */}
                            C.
                            <MyDiv>
                                 <CkeditorComponent desc={optionC} setDesc={setOptionC} place={'C'} />
                            </MyDiv>

                            <Checkbox
                                name="mec"
                                checked={checkCode == 3 ? true : false}
                                onChange={(e) => ChangeChekCode(3)}
                            />
                        </DivOfVariantDiv>
                        <DivOfVariantDiv>
                            {/* <InputVar
                                placeholder="D"
                                value={optionD}
                                onChange={(e) => setOptionD(e.target.value)}
                            /> */}
                            D.
                            <MyDiv>
                                 <CkeditorComponent desc={optionD} setDesc={setOptionD} place={'D'} />
                            </MyDiv>

                            <Checkbox
                                name="med"
                                checked={checkCode == 4 ? true : false}
                                onChange={(e) => ChangeChekCode(4)}
                            />
                        </DivOfVariantDiv>
                    </VariantAddingWrapper>
                </DialogContent>
                <DialogActions
                    style={{
                        paddingBottom: 35,
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    <Button
                        variant="outlined"
                        onClick={() => props?.close()}
                    >
                        Bekor qilish
                    </Button>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Qo'shish
                    </Button>
                </DialogActions>
            </form>
        </Modal>
    )
}
