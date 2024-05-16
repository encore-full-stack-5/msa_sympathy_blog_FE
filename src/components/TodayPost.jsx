import React, { useEffect, useRef, useState } from "react";
import { saveToday, showToday } from "./api";

const [todayRequest, setTodayRequest] = useState({
  /* initial state based on your TodayRequest object structure */
});
const [todayCount, setTodayCount] = useState(0);
const [isLoading, setIsLoading] = useState(false);

const handleChange = (event) => {
  setTodayRequest({
    ...todayRequest,
    [event.target.name]: event.target.value,
  });
};

const handleSaveToday = async () => {
  setIsLoading(true);
  try {
    await saveToday(todayRequest);
    alert("Data saved successfully!");
  } catch (error) {
    alert("Failed to save data.");
  }
  setIsLoading(false);
};

const handleShowToday = async () => {
  setIsLoading(true);
  try {
    const count = await showToday(todayRequest);
    setTodayCount(count);
  } catch (error) {
    alert("Failed to fetch data.");
  }
  setIsLoading(false);
};

const Today = () => {
  return (
    <div>
      <h1>Manage Today's Data</h1>
      <input
        type="text"
        name="someProperty"
        value={todayRequest.someProperty || ""}
        onChange={handleChange}
      />
      <button onClick={handleSaveToday} disabled={isLoading}>
        Save Today
      </button>
      <button onClick={handleShowToday} disabled={isLoading}>
        Show Today Count
      </button>
      <p>Today Count: {todayCount}</p>
    </div>
  );
};

export default Today;
