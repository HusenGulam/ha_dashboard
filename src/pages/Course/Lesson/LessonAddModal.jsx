import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Select from "react-select";
import { FileYuklang, VideoUploadContainer, VideoYuklang, WWraper } from '../style'

const optionsVideoTypes = [
    { value: "Youtube", label: "Youtube Link" },
    { value: "Video", label: "Video" },
    { value: "Vimeo", label: "Vimeo" },
];

export default function LessonAddModal(props) {
    const [lessontitle, setlessontitle] = useState("");
    const [VideoTypesValue, setVideoTypesValue] = useState("Youtube");
    const [lessonvideolink, setlessonvideolink] = useState("");
    const [lessonsummary, setlessonsummary] = useState("");
    const [lessontime, setlessontime] = useState("");
    const [lessonorder, setlessonorder] = useState("");
    const [lessonVideo, setLessonVideo] = useState(null)


    const submitHandler = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("title", lessontitle);
        formData.append("section", props.section);
        formData.append("video_type", VideoTypesValue);
        formData.append("video_link", lessonvideolink);
        formData.append("video", lessonVideo);
        formData.append("summary", lessonsummary);
        formData.append("time", lessontime);
        formData.append("order", lessonorder);
        props.AddLesson(formData)
    }

    const closeAddLesson = () => {
        setLessonVideo(null)
        setlessonvideolink(null)
        setlessontitle(null)
        setVideoTypesValue("Youtube")
        setlessonorder(null)
        setlessonsummary(null)
        setlessontime(null)
    }

    useEffect(() => { closeAddLesson() }, [props.open])

    return (
        <Dialog style={{ zIndex: 9999999999999999, minWidth: "300px" }} open={props?.open}>
            <form onSubmit={submitHandler}>
                <DialogTitle>
                    Dars qo'shish
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bu yerda kurs bo'limlari uchun darslar
                        qo'shiladi
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Dars nomi"
                        type="text"
                        fullWidth
                        size="small"
                        variant="outlined"
                        style={{ marginTop: 20 }}
                        value={lessontitle}
                        onChange={(e) => setlessontitle(e.target.value)}
                        required
                    />
                    <WWraper>
                        <Select
                            placeholder="Video turi"
                            options={optionsVideoTypes}
                            onChange={(e) => setVideoTypesValue(e.value)}

                        />
                    </WWraper>
                    {VideoTypesValue === 'Video' ?
                        <VideoUploadContainer >
                            <FileYuklang style={{ fontSize: '15px' }}>{lessonVideo ? lessonVideo.name : "Video yuklang ..."}</FileYuklang>
                            <input
                                type="file"
                                onChange={(e) => setLessonVideo(e.target.files[0])}
                                name=""
                                hidden
                                id="video_upload"
                                required
                            />
                            <VideoYuklang htmlFor="video_upload">Video Yuklang </VideoYuklang>
                        </VideoUploadContainer> :
                        <TextField
                            margin="dense"
                            id="name"
                            label="Video linki"
                            type="text"
                            size="small"
                            fullWidth
                            style={{ marginTop: 20, zIndex: 0 }}
                            variant="outlined"
                            value={lessonvideolink}
                            onChange={(e) => setlessonvideolink(e.target.value)}
                            required
                        />

                    }
                    <TextField
                        margin="dense"
                        id="name"
                        label="Video ta'rifi"
                        type="text"
                        fullWidth
                        size="small"
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={lessonsummary}
                        onChange={(e) => setlessonsummary(e.target.value)}
                        required
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Video davomiyligi (minutda)"
                        type="number"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={lessontime}
                        onChange={(e) => setlessontime(e.target.value)}
                        required
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Video tartib raqami"
                        type="number"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={lessonorder}
                        onChange={(e) => setlessonorder(e.target.value)}
                        required
                    />
                </DialogContent>
                <DialogActions
                    style={{ paddingRight: 25, paddingBottom: 15 }}
                >

                    <Button variant="contained" type="button" onClick={props.closeAddLesson}>
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
