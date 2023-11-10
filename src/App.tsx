import { Editor } from "@tinymce/tinymce-react";
import "./App.css";

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorChange = (e: any) => {
    console.log("Content was updated:", e.target.getContent());
  };

  return (
    <div style={{ width: "100%" }}>
      <Editor
        apiKey="YOUR_API_KEY"
        cloudChannel="dev"
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: "link image code",
          toolbar:
            "undo redo | bold italic | alignleft aligncenter alignright | code",
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
}
