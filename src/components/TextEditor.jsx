// components/TextEditor.js
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value, setValue }) => (
    <ReactQuill value={value} onChange={setValue} className="h-[200px] mb-[50px]" />
);

export default TextEditor;