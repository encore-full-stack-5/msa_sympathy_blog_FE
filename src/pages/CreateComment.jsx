import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";

export default function CreateComment({ postId }) {
  const [content, setContent] = useState("");

  async function createNewComment(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.set("postId", postId);
    data.set("content", content);

    const response = await fetch("http://localhost:4000/comment", {
      method: "POST",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setContent("");
    }
  }

  return (
    <div>
      <form onSubmit={createNewComment}>
        <Editor value={content} onChange={setContent} />
        <button style={{ marginTop: "5px" }}>Create comment</button>
      </form>
    </div>
  );
}

function Editor({ value, onChange }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={(content) => onChange(content)}
    />
  );
}
