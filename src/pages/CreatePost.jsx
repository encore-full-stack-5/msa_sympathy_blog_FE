import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import "../CreatePost.css";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div>
        <form onSubmit={createNewPost}>
          <input
            type="title"
            placeholder={"Title"}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          <input
            type="summary"
            placeholder={"Summary"}
            value={summary}
            onChange={(ev) => setSummary(ev.target.value)}
          />

          <input type="file" onChange={(ev) => setFiles(ev.target.files)} />

          <Editor value={content} onChange={setContent} />
          <div className="meta-setting">
            <div className="category-setting">
              <strong className="category-title">카테고리</strong>
              <div>
                <div className="category-select-wrapper">
                  <select className="category-select">
                    <option value="1">게시판</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="visibility-setting-box">
              <strong className="category-title">
                공개
                <span className="visibility-setting-notice">
                  이 글을 나만 볼 수 있습니다
                </span>
              </strong>

              <div className="visibility-setting-item-wrapper">
                <div className="visibility-setting-item">
                  <label className="setting-label">전체</label>
                </div>
                <div className="visibility-setting-item">
                  <label className="setting-label">이웃</label>
                </div>
                <div className="visibility-setting-item">
                  <label className="setting-label">서로이웃</label>
                </div>
                <div className="visibility-setting-item">
                  <label className="setting-label">비공개</label>
                </div>
              </div>
            </div>
          </div>
          <button style={{ marginTop: "5px" }}>Create post</button>
        </form>
      </div>
    </>
  );
}
