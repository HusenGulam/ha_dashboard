import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ChangePassword(props) {
    const [password, setPassword] = useState(null)
    const [password2, setPassword2] = useState(null)
    const [valid, setValid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('password', password)
        props.handleSubmit(formData)

    }

    useEffect(() => {
        setPassword(null)
        setPassword2(null)
    }, [props])

    const changePassword2 = (val) => {
        setPassword2(val)
        if (password === val) {
            setValid(true)
        } else {
            setValid(false)
        }
    }

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
                    Parolni o'zgartirish
                </DialogTitle>
                <DialogContent>
                    <div>
                        Bu yerda shaxsiy parol o'zgartiriladi. Iltimos kiritilgan parolni eslab qolin!
                    </div>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Maxfiy so'z"
                        type="password"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Maxfiy so'zni takrorlang"
                        type="password"
                        size="small"
                        fullWidth
                        style={{ marginTop: 20, zIndex: 0 }}
                        variant="outlined"
                        value={password2}
                        required
                        onChange={(e) => changePassword2(e.target.value)}
                    />
                    <span style={valid ? { fontSize: "11px", color: 'green' } : { fontSize: "11px", color: 'red' }}>{password2 ? valid ? "Maxfiy so'z mos keldi" : "Maxfiy so'zlar bir biriga mos kelmadi" : null}</span>
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
                    <Button variant="contained" type='submit' disabled={!valid}>
                        O'zgartirish
                    </Button>

                </DialogActions>
            </form>
        </Dialog>
    )
}
