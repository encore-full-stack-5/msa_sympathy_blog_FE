import React, { useState } from "react";
import { signIn } from "../api/auth";

function Dropdown() {
  // 로컬 스토리지에서 아이디와 토큰 가져오기
  const token = localStorage.getItem("token");

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const login = () => {
    const url = window.location.href;
    const startIndex = url.indexOf("token=") + 6; // "token=" 다음 인덱스부터 시작
    const endIndex = url.indexOf("&", startIndex); // "&" 전 인덱스까지
    const token = url.substring(startIndex, endIndex);
    saveTokenToLocalStorage(token);

    window.location.href =
      // "http://192.168.0.12:5173/signin?redirect=" + window.location.href;
      "http://localhost:5174/signin?redirect=" + window.location.href;
  };

  const handleLogout = () => {
    // 로그아웃 처리: 로컬 스토리지에서 아이디와 토큰 제거
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const saveTokenToLocalStorage = async (receivedToken) => {
    // 받아온 토큰을 로컬 스토리지에 저장
    try {
      const response = await signIn(receivedToken);
      setData(response.data); // Set the fetched data to state
      debugger;
    } catch (error) {
      console.error("Error fetching recipe data:", error);
    }
    localStorage.setItem("token", receivedToken);
    setIsLoggedIn(true);
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
