import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import CkeditorComponent from '../../Tafsilot/components/Ckeditor/Ckeditor';
import { Bolimtext, DivOfVariantDiv, InputVar, InputVar1, Savollartext, VariantAddingWrapper } from '../style';

export default function QuestionEditModal(props) {

    const [query, setQuery] = useState('')
    const [optionA, setOptionA] = useState('')
    const [optionB, setOptionB] = useState('')
    const [optionC, setOptionC] = useState('')
    const [optionD, setOptionD] = useState('')
    const [correct_answer, setCorrectAnswer] = useState('')
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
        if(props?.item !== null){
            setQuery(props?.item?.query)
            setOptionA(props?.item?.optionA)
            setOptionB(props?.item?.optionB)
            setOptionC(props?.item?.optionC)
            setOptionD(props?.item?.optionD)
            setCorrectAnswer(props?.item?.correct_answer)
            console.log(query,optionA,optionB,optionC,optionD,correct_answer)
            if (props?.item?.optionA === props?.item?.correct_answer) {
                setCheckCode(1)
            } else if (props?.item?.optionB === props?.item?.correct_answer) {
                setCheckCode(2)
            } else if (props?.item?.optionC === props?.item?.correct_answer) {
                setCheckCode(3)
            }
            else if (props?.item?.optionD === props?.item?.correct_answer) {
                setCheckCode(4)
            } else {
                setCheckCode(-1)
            }
        }
    }, [props?.item])

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
        let formData = new FormData()
        formData.append('quiz', props?.quiz?.id)
        formData.append('query', query)
        formData.append('optionA', optionA)
        formData.append('optionB', optionB)
        formData.append('optionC', optionC)
        formData.append('optionD', optionD)
        formData.append('correct_answer', correct_answer)
        props.handleSubmit(formData, props?.item.id)
    }

    return (
        <Dialog
            style={{ zIndex: 9999999999999999 }}
            open={props?.open}
        >
            <form onSubmit={handleSubmit}>
                <Savollartext>Savolni taxrirlash</Savollartext>
                <DialogContent>
                    <DialogContentText>
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
                    </DialogContentText>
                    <VariantAddingWrapper>
                        <Bolimtext>Variant taxrirlash</Bolimtext>
                        <DivOfVariantDiv>
                            {/* <InputVar
                                placeholder="A"
                                value={optionA}
                                onChange={(e) => setOptionA(e.target.value)}
                            /> */}
                            <CkeditorComponent desc={optionA} setDesc={setOptionA}/>

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
                            <CkeditorComponent desc={optionB} setDesc={setOptionB}/>

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
                            <CkeditorComponent desc={optionC} setDesc={setOptionC}/>

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
                            <CkeditorComponent desc={optionD} setDesc={setOptionD}/>

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
                        Saqlash
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
