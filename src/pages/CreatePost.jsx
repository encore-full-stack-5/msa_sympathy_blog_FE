import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import "../CreatePost.css";
import { newPost } from "../api/post";

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
    // const response = await fetch("http://localhost:4000/post", {
    //   method: "POST",
    //   body: data,
    //   credentials: "include",
    // });
    // if (response.ok) {
    //   setRedirect(true);
    // }
  }

  const [selectedLabel, setSelectedLabel] = useState(""); // 선택된 라벨의 텍스트를 저장할 상태

  const handleLabelClick = (text) => {
    setSelectedLabel(text); // 선택된 라벨의 텍스트를 상태에 저장
  };

  const [selectedTopic, setSelectedTopic] = useState(""); // 선택된 라벨의 텍스트를 저장할 상태

  const handleTopicLabelClick = (text) => {
    setSelectedTopic(text); // 선택된 라벨의 텍스트를 상태에 저장
  };

  const postApi = async (e) => {
    e.preventDefault();
    try {
      const req = {
        title: title,
        content: content,
        topic: selectedTopic,
        publicScope: selectedLabel,
        category: {
          categoryName: category,
        },
      };
      const res = await newPost(req);
      if (res.status === 200) {
        alert("발행완료");
      }
    } catch (error) {
      // alert("로그인 중 오류가 있습니다");
    }
  };

  const [category, setCategory] = useState(""); // 선택된 카테고리를 저장하는 상태

  // select 요소의 선택이 변경될 때 호출되는 함수
  const handleSelectChange = (event) => {
    setCategory(event.target.value);
  };

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
              <div className="category-select-wrapper">
                <select
                  className="category-select"
                  value={category}
                  onChange={handleSelectChange}
                >
                  <option value="일상">일상</option>
                  <option value="취미">취미</option>
                  <option value="리뷰">리뷰</option>
                </select>
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
                  <label
                    className={
                      "setting-label" +
                      (selectedLabel === "ALL" ? " selected" : "")
                    }
                    onClick={() => handleLabelClick("ALL")}
                  >
                    전체
                  </label>
                </div>
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedLabel === "ONE_NEIGHBOR" ? " selected" : "")
                    }
                    onClick={() => handleLabelClick("ONE_NEIGHBOR")}
                  >
                    이웃
                  </label>
                </div>
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedLabel === "BOTH_NEIGHBOR" ? " selected" : "")
                    }
                    onClick={() => handleLabelClick("BOTH_NEIGHBOR")}
                  >
                    서로이웃
                  </label>
                </div>
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedLabel === "NOT_PUBLIC" ? " selected" : "")
                    }
                    onClick={() => handleLabelClick("NOT_PUBLIC")}
                  >
                    비공개
                  </label>
                </div>
              </div>
              <strong className="category-title">
                주제
                <span className="visibility-setting-notice">
                  주제를 선택하면 내블로그와 블로그 홈에서 주제별로 글을 볼 수
                  있습니다.
                </span>
              </strong>
              <div className="visibility-setting-item-wrapper">
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedTopic === "ENTERTAINMENT" ? " selected" : "")
                    }
                    onClick={() => handleTopicLabelClick("ENTERTAINMENT")}
                  >
                    엔터테이먼트
                  </label>
                </div>
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedTopic === "LIFESTYLE" ? " selected" : "")
                    }
                    onClick={() => handleTopicLabelClick("LIFESTYLE")}
                  >
                    일상
                  </label>
                </div>
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedTopic === "HOBBY" ? " selected" : "")
                    }
                    onClick={() => handleTopicLabelClick("HOBBY")}
                  >
                    취미
                  </label>
                </div>
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedTopic === "KNOWLEDGE" ? " selected" : "")
                    }
                    onClick={() => handleTopicLabelClick("KNOWLEDGE")}
                  >
                    지식
                  </label>
                </div>
                <div className="visibility-setting-item">
                  <label
                    className={
                      "setting-label" +
                      (selectedTopic === "NONE" ? " selected" : "")
                    }
                    onClick={() => handleTopicLabelClick("NONE")}
                  >
                    없음
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            className="bg-green-500 text-white w-36"
            style={{ marginTop: "5px" }}
            onClick={postApi}
          >
            발행
          </button>
        </form>
      </div>
    </>
  );
}
