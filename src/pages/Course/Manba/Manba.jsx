import { Box } from '@mui/system'
import React, { useState } from 'react'
import { AddBtn, Bolimtext, Btn, ContentContainer, DelIcon, EditIcon, FileContainer, FileLink, NextButton, RightMe, ThirdContainer } from '../style'
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FileAddModal from './FileAddModal';
import useAxios from '../../../api/useAxios';
import { useEffect } from 'react';
import { BaseURLMedia } from '../../../Base/Url';
import FileEditModal from './FileEditModal';
import Swal from 'sweetalert2';
import Loading from '../../../components/Loading/Loading';
export default function Manba({ handleNext, course_id, step }) {
    const api = useAxios()

    const [files, setFiles] = useState([])
    const [fileAddModal, setFileAddModal] = useState(false)
    const [course, setCourse] = useState(null)
    const [render, setRender] = useState(false)
    const [editItem, setEditItem] = useState(null)
    const [editModal, setEditModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const openAddFilesModal = () => {
        setFileAddModal(true)
    }

    const get_files = async () => {
        setIsLoading(true)
        let res = await api.get(`/attachment/`, { params: { course: course_id } })
        if (res.data.success) {
            setFiles(res.data.data)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        get_files()
        setCourse(course_id)
    }, [course_id, render])

    const closeAddFilesModal = () => {
        setFileAddModal(false)
    }

    const AddFile = async (data) => {
        let res = await api.post('/attachment/', data)
        if (res.data.success) {
            setRender(!render)
            closeAddFilesModal()
        }
    }

    const EditFile = async (data, id) => {
        let res = await api.put(`/attachment/${id}/`, data)
        if (res.data.success) {
            setRender(!render)
            closeEditModal()
        }
    }

    const DeleteFile = (item) => {
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
                let res = await api.delete(`/attachment/${item.id}/`)
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

    const openEditFile = (item) => {
        setEditItem(item)
        setEditModal(true)
    }

    const closeEditModal = () => {
        setEditItem(null)
        setEditModal(false)
    }


    const SaveAll = async () => {
        if (step != 7) {
            let res = await api.post(`/course-step/${course_id}/`, { step: 5 })
            if (res.data.success) {
                handleNext(4)
            }
        }
    }

    return (
        <>
            {isLoading ? <Loading /> :
                <React.Fragment>
                    <ContentContainer>
                        <ThirdContainer>
                            <Bolimtext>Barcha qo'llanmalar</Bolimtext>
                            <AddBtn
                                onClick={() => openAddFilesModal()}
                                startIcon={<ControlPointIcon />}
                            >
                                Qo’shish{" "}
                            </AddBtn>
                        </ThirdContainer>
                        {files?.map((item, index) => (
                            <FileContainer>
                                <FileLink href={BaseURLMedia + item?.file} target="_blank" download={true}>{index + 1}) {item?.title}</FileLink>
                                <RightMe style={{ justifyContent: "flex-end", gridGap: "10px" }}>
                                    <Btn
                                        onClick={() => openEditFile(item)}
                                    >
                                        <EditIcon />
                                    </Btn>
                                    <Btn
                                        onClick={() => DeleteFile(item)}
                                    >
                                        <DelIcon />
                                    </Btn>
                                </RightMe>
                            </FileContainer>
                        ))}
                    </ContentContainer>
                    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                        <NextButton
                            color="inherit"
                            type='button'
                            sx={{ mr: 1 }}
                            onClick={() => handleNext(2)}
                        >
                            Ortga
                        </NextButton>
                        <Box sx={{ flex: "1 1 auto" }} />

                        <NextButton variant="contained" onClick={() => SaveAll()} >
                            Saqlash
                        </NextButton>
                    </Box>
                    <FileAddModal open={fileAddModal} close={closeAddFilesModal} course_id={course_id} handleSubmit={AddFile} />
                    <FileEditModal open={editModal} close={closeEditModal} item={editItem} course_id={course_id} handleSubmit={EditFile} />
                </React.Fragment>}
        </>
    )
}
