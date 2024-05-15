import React, { useEffect, useRef, useState } from "react";

const Neighbor = () => {
  return (
    <div>
      <div>
        <p>이웃인 블러거 유저들</p>
        <div>
          <button onClick={() => console.log("버튼 클릭!")}>이웃삭제</button>
        </div>
      </div>
      <div>
        <p>이웃 요청한 블로그 유저들</p>
        <div>
          <button onClick={() => console.log("버튼 클릭!")}>이웃삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Neighbor;
