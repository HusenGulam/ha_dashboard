import { Accordion, AccordionSummary, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { Button, Select } from 'antd';
import React, { useState } from 'react'
import { ActionWrapper, AddBtn, AddBtn1, AddBtnedit, AddBtnred, Bolimtext, BottomWrap, Btn, ContentContainer, DelIcon, EditIcon, FileYuklang, LeftMe, LessonWord, NextButton, PlayIm, RightMe, ThirdContainer, VideoUploadContainer, VideoYuklang, VidText, WWraper } from '../style'
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import useAxios from '../../../api/useAxios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayFill from "../../../assets/images/playfill.png";
import LessonAddModal from './LessonAddModal';
import SectionAddModal from './SectionAddModal';
import { useEffect } from 'react';
import SectionEditModal from './SectionEditModal';
import ProgresModal from './ProgresModal';
import LessonEditModal from './LessonEditModal';
import VideoPlayer from '../../../components/VideoPlayer/VideoPlayer';
import { BaseURLMedia } from "../../../Base/Url";
import Loading from '../../../components/Loading/Loading';

export default function Lesson({ course_id, handleNext }) {

    const api = useAxios();
    const [render, setrender] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [sectionEditOpen, setSectionEditOpen] = useState(false)
    const [sectionEdit, setSectionEdit] = useState(null)

    const [lessonEditOpen, setLessonEditOpen] = useState(false)
    const [lessonEdit, setLessonEdit] = useState(null)

    const [sections, setSections] = useState([])

    const [sectionIDValue, setsectionIDValue] = useState(null);
    //sections data states
    const [CourseSectionsData, setCourseSectionsData] = useState([]);

    const [playerOpen, setPlayerOpen] = useState(false)
    const [playerUrl, setPlayerUrl] = useState(null)

    const get_sections = async () => {
        setIsLoading(true)
        let res = await api.get(`/section/?course=${course_id}`)
        if (res.data.success) {
            res.data.data.sort(function (a, b) { return a.order - b.order })
            setCourseSectionsData(res.data.data)
            let arr = [];
            res.data.data.filter((e) => {
                arr.push({ value: e.id, label: e.title });
            });
            setSections(arr);
            setIsLoading(false)
        }
    }

    useEffect(() => { get_sections() }, [course_id, render])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleOpenSectionEdit = (item) => {
        setSectionEdit(item)
        setSectionEditOpen(true)
    }

    const closeSectionEdit = () => {
        setSectionEdit(null)
        setSectionEditOpen(false)
    }

    const handleOpenLessonEdit = (item) => {
        setLessonEdit(item)
        setLessonEditOpen(true)
    }

    const closeLessonEdit = () => {
        setLessonEdit(null)
        setLessonEditOpen(false)
    }


    const playVideo = (item) => {
        if (item.video_type == "Video") {
            setPlayerUrl(BaseURLMedia + item.video)
        } else {
            setPlayerUrl(item.video_link)
        }
        setPlayerOpen(true)
    }

    const [activeStep, setActiveStep] = React.useState(
        localStorage.getItem("active_step") !== null
            ? localStorage.getItem("active_step") * 1
            : 0
    );


    const handleClickOpen1 = (id) => {
        setsectionIDValue(id);
        setOpen1(true);
    };






    const [percentage, setPercentage] = useState(0)
    const [isUploading, setIsUploading] = useState(false)


    const closeAddLesson = () => {
        setsectionIDValue(null)
        setOpen1(false)
    }


    //add lesson
    const AddLesson = (formData) => {
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);

                if (percent < 100) {
                    setPercentage(percent)
                }
            }
        }
        try {
            setIsUploading(true)
            api.post("/lesson/", formData, options).then((res) => {
                setIsUploading(false)
                setrender(!render);
                closeAddLesson()


            });
        } catch (error) {
            setIsUploading(false)
            console.log(error);
        }
    };

    //edit lesson
    const EditLesson = (formData, id) => {
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);

                if (percent < 100) {
                    setPercentage(percent)
                }
            }
        }
        try {
            setIsUploading(true)
            api.put(`/lesson/${id}/`, formData, options).then((res) => {
                setIsUploading(false)
                console.log(res);
                setrender(!render);
                closeLessonEdit()


            });
        } catch (error) {
            setIsUploading(false)
            console.log(error);
        }
    };

    const DeleteOneSectionLesson = (item) => {
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
                let res = await api.delete(`/lesson/${item.id}/`)
                if (res.data.success === true) {
                    Swal.fire(
                        "O'chirildi",
                        "Ma'lumot o'chirildi.",
                        'success'
                    )
                    setrender(!render);
                } else {
                    Swal.fire(
                        'Xatolik!',
                        "O'chirishda qandaydur xatolik mavjud!",
                        'error'
                    )
                }

            }
        })

    };
    //modals section
    const AddSection = (data) => {
        api.post("/section/", data).then((res) => {
            if (res) {
                setOpen(false);
                setrender(!render);
            }
        });
    };

    const EditSection = (data) => {
        api.put(`/section/${sectionEdit?.id}/`, data).then((res) => {
            if (res) {
                closeSectionEdit()
                setrender(!render);
            }
        });
    };



    const DeleteSection = (item) => {
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
                let res = await api.delete(`/section/${item.id}/`)
                if (res.data.success === true) {
                    Swal.fire(
                        "O'chirildi",
                        "Ma'lumot o'chirildi.",
                        'success'
                    )
                    setrender(!render);
                } else {
                    Swal.fire(
                        'Xatolik!',
                        "O'chirishda qandaydur xatolik mavjud!",
                        'error'
                    )
                }

            }
        })

    };

    return (
        <>
            {isLoading ? <Loading /> :
                <React.Fragment>
                    <ContentContainer>
                        <ThirdContainer>
                            <Bolimtext>Bo’limlar</Bolimtext>
                            <AddBtn
                                onClick={handleClickOpen}
                                startIcon={<ControlPointIcon />}
                            >
                                Bo’lim qo’shish{" "}
                            </AddBtn>
                        </ThirdContainer>
                        {CourseSectionsData?.map((item, index) => (
                            <Accordion key={item.id} className="myaccordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <LessonWord>{item.title}</LessonWord>
                                </AccordionSummary>
                                {item.lessons?.map((p) => (
                                    <ActionWrapper>
                                        <LeftMe>
                                            <PlayIm src={PlayFill} onClick={() => playVideo(p)} />
                                            <VidText>{p.title}</VidText>
                                        </LeftMe>
                                        <RightMe style={{ justifyContent: "flex-end" }}>
                                            <Btn
                                                onClick={() => handleOpenLessonEdit(p)}
                                            >
                                                <EditIcon />
                                            </Btn>
                                            <Btn
                                                onClick={() => DeleteOneSectionLesson(p)}
                                            >
                                                <DelIcon />
                                            </Btn>
                                        </RightMe>
                                    </ActionWrapper>
                                ))}
                                <BottomWrap>
                                    <AddBtn1 onClick={() => handleClickOpen1(item.id)}>
                                        Video qo’shish{" "}
                                    </AddBtn1>
                                    <AddBtnedit style={{ marginLeft: 20 }} onClick={() => handleOpenSectionEdit(item)}>
                                        Bo'limni tahrirlash {" "}
                                    </AddBtnedit>
                                    <AddBtnred style={{ marginLeft: 20 }} onClick={() => DeleteSection(item)}>
                                        Bo'limni O'chirish
                                    </AddBtnred>
                                </BottomWrap>
                            </Accordion>
                        ))}

                        <LessonAddModal section={sectionIDValue} AddLesson={AddLesson} open={open1} closeAddLesson={closeAddLesson} />
                        <LessonEditModal EditLesson={EditLesson} open={lessonEditOpen} item={lessonEdit} closeEditLesson={closeLessonEdit} sections={sections} />
                        {playerOpen ?
                            <VideoPlayer open={playerOpen} url={playerUrl} close={() => setPlayerOpen(false)} /> : null}

                        <SectionAddModal open={open} handleClose={() => setOpen(false)} course_id={course_id} AddSection={AddSection} />
                        <SectionEditModal open={sectionEditOpen} item={sectionEdit} handleClose={closeSectionEdit} course_id={course_id} EditSection={EditSection} />

                        <ProgresModal open={isUploading} percentage={percentage} />
                        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                            <NextButton
                                color="inherit"
                                type='button'
                                sx={{ mr: 1 }}
                                onClick={() => handleNext(0)}
                            >
                                Ortga
                            </NextButton>
                            <Box sx={{ flex: "1 1 auto" }} />

                            <NextButton variant="contained" onClick={() => handleNext(2)} >
                                Keyingi
                            </NextButton>
                        </Box>

                    </ContentContainer>
                </React.Fragment>}</>

    )
}
