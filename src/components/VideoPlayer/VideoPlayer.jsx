import { Button, Dialog, DialogContent } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player';
import "./Player.css"
export default function VideoPlayer({ url, close }) {
    return (
        <div className="react-player-modal">
            <div className="react-player-modal__wrap">
                <ReactPlayer controls url={url} width={'100%'} height={'100%'} loop />
                <button className="react-player-modal__btn" onClick={close}>✖</button>
            </div>
        </div>
    )
}


