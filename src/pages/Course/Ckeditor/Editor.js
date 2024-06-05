import React, { useEffect, useRef } from "react";
import ClassicEditor from 'ckeditor5-classic-with-mathtype';
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function App({ onChange, editorLoaded, name, value,place }) {
  return (
    <CKEditor

      disabled={true}
      editor={ClassicEditor}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
      }}
      config={{
        toolbar: {
          items: [
            "heading",
            "MathType",
            "ChemType",
            "|",
            "bold",
            "italic",
            "link",
            "bulletedList",
            "numberedList",
            "imageUpload",
            "mediaEmbed",
            "insertTable",
            "blockQuote",
            "undo",
            "redo"
          ],
          isReadOnly:true
        }
      }}
      data={value === undefined ? '' : value}
    />
  );
}

