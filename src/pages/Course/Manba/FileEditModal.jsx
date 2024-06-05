import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { FileYuklang, VideoUploadContainer, VideoYuklang, WWraper } from '../style'


export default function FileEditModal(props) {
    const [title, setTitle] = useState(null);
    const [file, setFile] = useState(null);
    const [order, setOrder] = useState("");


    const submitHandler = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        formData.append("order", order);
        formData.append("course", props?.course_id);
        props.handleSubmit(formData, props?.item.id)
    }

    const closeAddLesson = () => {
        setTitle(props?.item?.title)
        setOrder(props?.item?.order)
    }

    useEffect(() => { closeAddLesson() }, [props.item])

    return (
        <Dialog style={{ zIndex: 9999999999999999, minWidth: "300px" }} open={props?.open}>
            <form onSubmit={submitHandler}>
                <DialogTitle>
                    Qo'llanma yuklash
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bu yerda kursga oid qo'llanmalar yuklanadi. Qo'llanma (.docx, .pdf) bo'lishi mumkin.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Qo'llanma nomi"
                        type="text"
                        fullWidth
                        size="small"
                        variant="outlined"
                        style={{ marginTop: 20 }}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <VideoUploadContainer >
                        <FileYuklang style={{ fontSize: '15px' }}>{file ? file.name : "File yuklang ..."}</FileYuklang>
                        <input
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            name=""
                            hidden
                            id="video_upload"
                        />
                        <VideoYuklang htmlFor="video_upload">File Yuklang </VideoYuklang>
                    </VideoUploadContainer>

                    <TextField
                        margin="dense"
                        id="name"
                        label="Video tartib raqami"
                        type="number"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                        required
                    />
                </DialogContent>
                <DialogActions
                    style={{ paddingRight: 25, paddingBottom: 15 }}
                >

                    <Button variant="contained" type="button" onClick={props.close}>
                        Bekor qilish
                    </Button>
                    <Button variant="contained" type="submit">
                        Qo'shish
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
