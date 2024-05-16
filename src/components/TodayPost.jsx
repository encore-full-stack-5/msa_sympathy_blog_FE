import React, { useEffect, useRef, useState } from "react";
import { saveToday, showToday } from './api';

const [todayRequest, setTodayRequest] = useState({ /* initial state based on your TodayRequest object structure */ });
  const [todayCount, setTodayCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

const Today = () => {
  return (
    <div>
      <div>
        <p>today's visitor</p>
      </div>
      <div>
        <p>5</p>
      </div>
    </div>
  );
};

export default Today;
