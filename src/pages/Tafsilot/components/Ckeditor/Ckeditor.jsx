import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Editor from './Editor';

export default function CkeditorComponent({ desc, setDesc }) {
    const [editorLoaded, setEditorLoaded] = useState(false);

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <div className="App" style={{width:'100%'}}>
            <Editor
            
                name="description"
                onChange={(data) => {
                    setDesc(data);
                }}
                value={desc}
                editorLoaded={editorLoaded}
            />
        </div>
    );
}
