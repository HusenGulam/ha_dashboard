import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
export default function ProgresModal(props) {
    return (
        <Dialog style={{ zIndex: 99999999999999999 }} open={props.open}>
            <DialogTitle>Video yuklanmoqda ...</DialogTitle>
            <DialogContent>
                <CircularProgressbar value={props.percentage} text={`${props.percentage}%`} />
            </DialogContent>
        </Dialog>
    )
}
