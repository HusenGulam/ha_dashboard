import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { WWraper } from '../style'
import Select from 'react-select'
import { useState } from 'react'
import useAxios from '../../../api/useAxios'
import { useEffect } from 'react'

const LEVELS = [
    { value: 1, label: "Boshlang'ich" },
    { value: 2, label: "O'rta" },
    { value: 3, label: "Murakkab" },
]
export default function QuizAddModal(props) {

    const api = useAxios()

    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [level, setLevel] = useState(null)
    const [time, setTime] = useState(null)
    const [order, setOrder] = useState(null)
    const [percent, setPercent] = useState(null)
    const [section, setSection] = useState(null)
    const [sectionOptions, setSectionOptions] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('title', title)
        formData.append('description', desc)
        formData.append('section', section)
        formData.append('course', props?.course_id)
        formData.append('level', level)
        formData.append('time', time)
        formData.append('order', order)
        formData.append('passed_percent', percent)
        formData.append('is_active', true)
        props.AddQuiz(formData)

    }

    const get_section = async () => {
        let res = await api.get(`/section/quiz/${props?.course_id}`)
        if (res.data.success) {
            let arr = [];
            res.data.data.filter((e) => {
                arr.push({ value: e.id, label: e.title });
            });
            setSectionOptions(arr)
        }
    }

    useEffect(() => {
        setTitle(null)
        setDesc(null)
        setLevel(null)
        setTime(null)
        setPercent(null)
        setOrder(null)
        setSection(null)
        get_section()
    }, [props])

    return (
        <Dialog
            style={{ zIndex: 9999999999999999 }}
            open={props?.open}
        >
            <form onSubmit={handleSubmit}>
                <DialogTitle
                    style={{ fontFamily: "Lexend", fontSize: 25 }}
                    component="h1"
                >
                    Test yaratish
                </DialogTitle>
                <DialogContent>
                    <div>
                        Bu yerda kurs bo'limlari uchun testlar yaratiladi
                    </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Test nomi"
                        type="text"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={title}
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Tarif"
                        type="text"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={desc}
                        required
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <WWraper>
                        <Select
                            placeholder="Bo'limni tanlang!"
                            options={sectionOptions}
                            onChange={(e) => setSection(e.value)}
                            required
                        />
                    </WWraper>
                    <WWraper>
                        <Select
                            placeholder="Test darajasi"
                            options={LEVELS}
                            onChange={(e) => setLevel(e.value)}
                            required
                        />
                    </WWraper>

                    <TextField
                        margin="dense"
                        id="name"
                        label="Test ishlash uchun berilgan vaqt (minutda)"
                        type="number"
                        fullWidth
                        size="small"
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={time}
                        required
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Test tartib raqami"
                        type="number"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={order}
                        required
                        onChange={(e) => setOrder(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Testdan o'tish foizi (1%-100%)"
                        type="number"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        required
                        variant="outlined"
                        value={percent}
                        onChange={(e) => setPercent(e.target.value)}
                    />
                </DialogContent>
                <DialogActions
                    style={{ paddingRight: 25, paddingBottom: 15 }}
                >
                    <Button
                        variant="outlined"
                        onClick={props.close}
                    >
                        Bekor qilish
                    </Button>
                    <Button variant="contained" type='submit'>
                        Qo'shish
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
