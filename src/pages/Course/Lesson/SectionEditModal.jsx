import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';

export default function SectionEditModal(props) {
    //section modal states
    const [titleVal, setTitleVal] = useState("");

    const [orderValue, setorderValue] = useState("");

    useEffect(() => {
        setorderValue(props.item?.order)
        setTitleVal(props.item?.title)
    }, [props.item])

    const submitHandler = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append("title", titleVal);
        formData.append("order", orderValue);
        formData.append("course", props?.item?.course);
        props.EditSection(formData)
    }
    return (
        <Dialog style={{ zIndex: 9999999999999999 }} open={props.open}>
            <form onSubmit={submitHandler}>
                <DialogTitle>Bo'limni tahrirlash</DialogTitle>
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
                        Tahrirlash
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}
