import React, { useEffect, useRef } from "react";
// import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-classic-with-mathtype';

function Editor({ onChange, editorLoaded, name, value,place }) {
    const editorRef = useRef();
    const { CKEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            // ClassicEditor: require("ckeditor5-classic-with-mathtype")
        };
    }, []);
    

    return (
        <div>
            {editorLoaded ? (
                <CKEditor
                    type=""
                    name={name}
                    editor={ClassicEditor}
                    config={{
                        
                        toolbar: {

                            items: [
                                'heading', 'MathType', 'ChemType',
                                '|',
                                'bold',
                                'italic',
                                'link',
                                'bulletedList',
                                'numberedList',
                                'imageUpload',
                                'mediaEmbed',
                                'insertTable',
                                'blockQuote',
                                'undo',
                                'redo'
                            ]
                        },
                        // extraPlugins: "ckeditor_wiris",
                        // removePlugins:
                        //     "filetools,uploadimage,uploadwidget,uploadfile,filebrowser,easyimage",
                        // allowedContent: true,
                        
                    }}

                    
                    onBeforeLoad={(CKEDITOR1) => {
                        CKEDITOR1.plugins.addExternal(
                            "ckeditor_wiris",
                            "/mathtype-ckeditor4/",
                            "plugin.js"
                        );
                    }}
                    
                    
                    data={value === undefined ? '' : value}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        // console.log({ event, editor, data })
                        onChange(data);
                    }}
                />
            ) : (
                <div>Editor loading</div>
            )}
        </div>
    );
}

export default Editor;