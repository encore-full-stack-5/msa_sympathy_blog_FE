import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../components/Dropdown";
import Post from "../components/Post";
import { signIn, home } from "../api/auth";
import { Link } from "react-router-dom";

const BlogMain = () => {
  const [view, setView] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const myNeighbor = () => {};
  const url = window.location.href;
  const startIndex = url.indexOf("token=") + 6; // "token=" 다음 인덱스부터 시작
  const endIndex = url.indexOf("&", startIndex); // "&" 전 인덱스까지
  const token = url.substring(startIndex, endIndex);
  console.log(token);
  localStorage.setItem("token", token);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token.length > 6) {
      // token이 존재하고 6글자 이상인 경우에만 실행
      login(token);
    }
  }, []); // 페이지가 로드될 때 한 번만 실행되도록 설정
  const signin = () => {
    window.location.href =
      "http://192.168.0.12:5173/signin?redirect=" + window.location.href;
    // "http://localhost:5174/signin?redirect=" + window.location.href;
    saveTokenToLocalStorage;
  };

  const login = async (token) => {
    try {
      const res = await signIn(token);
      if (res.status === 200) {
        // localStorage.setItem("token", res.data.token);
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
        localStorage.setItem("my_token", localStorage.getItem("token"));
        setIsLoggedIn(true);
        const response = await home(token);
        if (response.status === 200) {
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("nickname", response.data.nickname);
          localStorage.setItem("blogName", response.data.blogName);
          console.log(response.data);
          // localStorage.setItem("token", response.data.token);
          // console.log(localStorage.getItem("token"));

          // if (localStorage.getItem("blogName") === "null") {
          //   alert(
          //     localStorage.getItem("email") +
          //       " 님 안녕하세요!\n처음 뵙겠습니다!"
          //   );
          // }
        }
      }
    } catch (error) {
      // alert("로그인 중 오류가 있습니다");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    window.location.href = "http://localhost:5173";
  };

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
          {isLoggedIn && (
            <>
              <div className="flex mb-4">
                <img className="w-12 h-12 rounded-full" src="images.png" />
                <div className="ml-2 mt-0.5">
                  <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                    {localStorage.getItem("nickname")}
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                    오늘 0명 방문
                  </span>
                </div>
              </div>
              <Link to="/home">
                <button className="bg-green-500 text-white w-36" id="goToHome">
                  내 블로그
                </button>
              </Link>
              <Link to="/createPost">
                <button className="bg-green-500 text-white w-36" id="goToPost">
                  글쓰기
                </button>
              </Link>
              <br />
              <button
                className="bg-gray-100 w-72"
                id="goToPost"
                onClick={logout}
              >
                로그아웃
              </button>
            </>
          )}
          {!isLoggedIn && (
            <button
              className="bg-green-500 text-white w-72"
              id="login"
              onClick={signin}
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
