import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function SectionAddModal(props) {
    //section modal states
    const [titleVal, setTitleVal] = useState("");

    const [orderValue, setorderValue] = useState("");

    useEffect(() => {
        setorderValue("")
        setTitleVal("")
    }, [props.open])

    const submitHandler = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("title", titleVal);
        formData.append("course", props?.course_id);
        formData.append("order", orderValue);
        props.AddSection(formData)
    }
    return (
        <Dialog style={{ zIndex: 9999999999999999 }} open={props.open}>
            <form onSubmit={submitHandler}>
                <DialogTitle>Bo'lim qo'shish</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bu yerda kurs uchun bo'limlar qo'shiladi . Misol
                        uchun Html uchun "Responsive" , "Animation" ...
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Bo'lim nomi"
                        type="text"
                        fullWidth
                        size="small"
                        variant="outlined"
                        style={{ marginTop: 20 }}
                        value={titleVal}
                        onChange={(e) => setTitleVal(e.target.value)}
                        required
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Tartibi"
                        type="number"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20 }}
                        variant="outlined"
                        value={orderValue}
                        required

                        onChange={(e) => setorderValue(e.target.value)}
                    />
                </DialogContent>
                <DialogActions
                    style={{ paddingRight: 25, paddingBottom: 15 }}
                >
                    <Button variant="contained" type="button" onClick={props.handleClose}>
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
