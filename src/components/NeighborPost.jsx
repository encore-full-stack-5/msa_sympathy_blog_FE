import React, { useEffect, useRef, useState } from "react";

const Neighbor = () => {
  return (
    <div>
      <div>
        <div>
          <p>my neighbor</p>
        </div>
        <div>
          <p>이웃을 허락한 유저들 </p>
        </div>
        <div>
          <button onClick={() => console.log("버튼 클릭!")}>이웃삭제</button>
        </div>
      </div>
      <div>
        <p>neighbor requested</p>
        <div>
          <button onClick={() => console.log("버튼 클릭!")}>
            이웃요청수락
          </button>
        </div>
      </div>
    </div>
  );
};

export default Neighbor;
