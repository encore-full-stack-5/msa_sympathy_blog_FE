import React, { useState } from "react";

function Dropdown() {
  // 로컬 스토리지에서 아이디와 토큰 가져오기
  const isLogin = localStorage.getItem("token");
  const [isLoggedIn, setIsLoggedIn] = useState(!isLogin);

  const saveTokenToLocalStorage = () => {
    setIsLoggedIn(true);
    // console.log(receivedToken);
  };

  const login = () => {
    window.location.href =
      // "http://192.168.0.12:5173/signin?redirect=" + window.location.href;
      "http://localhost:5174/signin?redirect=" + window.location.href;
    saveTokenToLocalStorage;
  };

  const handleLogout = () => {
    // 로그아웃 처리: 로컬 스토리지에서 아이디와 토큰 제거
    localStorage.clear();
    setIsLoggedIn(false);
  };

  // 토큰을 받아오는 API 호출 및 저장 로직은 여기서 처리해야 합니다.

  return (
    <>
      <div
        id="dropdown-menu"
        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      >
        <div
          className="py-2 p-2"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          {/* 로그인 상태인 경우 */}
          {isLoggedIn && (
            <>
              <a
                className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                role="menuitem"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  id="myBlog"
                  width="18px"
                  className="mr-2"
                >
                  {/* 내 블로그 아이콘 SVG 코드 */}
                </svg>{" "}
                내 블로그
              </a>
              <a
                className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                role="menuitem"
                onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="logout"
                  width="18px"
                  className="mr-2"
                >
                  {/* 로그아웃 아이콘 SVG 코드 */}
                </svg>{" "}
                로그아웃
              </a>
            </>
          )}
          {/* 로그인 상태가 아닌 경우 */}
          {!isLoggedIn && (
            <>
              <a
                className="flex block rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
                role="menuitem"
                onClick={login}
              >
                로그인
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
