import '../stylesheets/App.css';
import Something from './SlateEditor/Editor'
import 'katex/dist/katex.min.css';
function CustomEditor({ Description, setDescription }) {
  return (
    <div >
      <Something Description={Description} setDescription={setDescription} />
    </div>
  );
}

export default CustomEditor;

