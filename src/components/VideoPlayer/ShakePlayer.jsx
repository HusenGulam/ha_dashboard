import React from 'react'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';

export default function ShakePlayer({ url }) {
    return (
        <ShakaPlayer autoPlay src={url} />
    )
}
