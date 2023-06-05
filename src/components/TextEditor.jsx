// components/TextEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, setValue, heightEditor }) => (
    <ReactQuill
        value={value}
        onChange={setValue}
        className={`${heightEditor ? `h-[${heightEditor}]` : "h-[200px]"} mb-[50px]`}
    />
);

export default TextEditor;