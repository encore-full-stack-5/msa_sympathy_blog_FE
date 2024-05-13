import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../components/Dropdown";
import Post from "../components/Post";

const BlogMain = () => {
  const [view, setView] = useState(false);

  const myNeighbor = () => {};
  return (
    <div className="app">
      <header className="header fixed top-0 left-0 right-0 flex items-center justify-between p-5 bg-green-500 h-16">
        <div className="flex mx-52">
          <img src="naverblog.png" alt="블로그 로고" />
          <div className="flex">
            <input
              type="text"
              style={{ marginLeft: "16px" }}
              className="bg-white pl-2 pr-8 py-2 text-base font-semibold outline-0 w-full"
              placeholder=""
              id=""
            />
            <input
              type="button"
              value="검색"
              id="search"
              className="bg-green-700 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-green-800 transition-colors ml-2"
            />
          </div>
          <div className="mx-52" style={{ position: "absolute", right: "0" }}>
            {/* <p
              id="userNickname"
              onClick={toggleDropdown}
              style={{ marginTop: "10px", color: "white" }}
            >
              <b>사용자</b>
            </p> */}
            <ul
              onClick={() => {
                setView(!view);
              }}
              style={{ marginTop: "10px", color: "white" }}
            >
              사용자 ▼{view && <Dropdown />}
            </ul>
          </div>
        </div>
      </header>
      <br />
      <br />
      <div id="container" className="flex mx-20">
        <div id="posts" style={{ width: "100rem" }}>
          <div>
            <div>
              <p style={{ textAlign: "left", fontSize: "22px" }}>이웃새글</p>
            </div>
            <div>
              <button
                id="neighborSort"
                style={{ height: "3rem", width: "10rem", marginLeft: "15rem" }}
                onClick={myNeighbor}
              >
                전체 이웃
              </button>
            </div>
          </div>
          <br />
          <Post />
          <br />
          <Post />
          <br />
          <Post />
          <br />
          <Post />
          <br />
          <Post />
          <br />
          <Post />
          <br />
        </div>
        <div
          id="me"
          className="mx-52"
          style={{ position: "absolute", right: "0" }}
        >
          프로필이 들어올 자리
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
