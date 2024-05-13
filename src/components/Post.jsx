import React, { useState } from "react";

const Post = ({ title, content, nickname, date, likes, comments, onClick }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    // gma
    <div className="flex">
      <div
        className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg"
        style={{ maxWidth: "45rem", width: "570px" }}
      >
        <div className="flex mb-4">
          <img className="w-12 h-12 rounded-full" src="images.png" />
          <div className="ml-2 mt-0.5">
            <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
              닉네임{nickname}
            </span>
            <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
              2000-00-00 월{date}
            </span>
          </div>
        </div>
        <span className="block font-medium font-semibold text-base leading-snug text-black dark:text-gray-100 text-left">
          제목{title}
        </span>
        <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal text-left">
          본문 ...더보기{content}
        </p>

        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <button onClick={handleLikeToggle} className="w-4">
              <svg
                class="text-red-400 w-4 h-auto fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {liked ? (
                  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                ) : (
                  <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                )}{" "}
              </svg>
            </button>
            <span className="ml-1 text-gray-500 dark:text-gray-400  font-light">
              공감 {likes}
            </span>
            <img src="chat.png" className="w-4 h-4 ml-10" />
            <span>댓글 {comments}</span>
          </div>
        </div>
      </div>
      <div className=" dark:bg-gray-800">
        <img src="noImg.png" className="w-40 h-40" />
      </div>
    </div>
  );
};

export default Post;
