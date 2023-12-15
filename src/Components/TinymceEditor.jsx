import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { TINYMCE_API_KEY, tinymceEditorConfig } from "../constants";

const TinymceEditor = ({ handleSelectionChange }) => {
  const tinymceEditorRef = useRef(null);

  const onEditorInit = (event, editor) => {
    tinymceEditorRef.current = editor;
    editor.on("selectionchange", (e) => {
      handleSelectionChange(e, tinymceEditorRef.current);
    });
  };

  return (
    <div>
      <Editor
        apiKey={process.env.TINYMCE_API_KEY ?? TINYMCE_API_KEY}
        onInit={onEditorInit}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={tinymceEditorConfig}
      />
    </div>
  );
};

export default TinymceEditor;
