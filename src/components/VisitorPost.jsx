import React, { useEffect, useRef, useState } from "react";

const [View, setView] = useState(false);

const Visitor = () => {
  return (
    <div>
      <div>
        <p>total visitors</p>
      </div>
      <div>
        <p>5</p>
      </div>
      <div>
        <p>daily visitors</p>
      </div>
      <div>
        <div>
          <p>Day of the week</p>
        </div>
        <div>
          <p>Day of the week visitors</p>
        </div>
      </div>
    </div>
  );
};
export default Visitor;
