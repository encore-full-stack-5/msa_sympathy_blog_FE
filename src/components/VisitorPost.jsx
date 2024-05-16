import React, { useEffect, useRef, useState } from "react";
import { saveVisitor, showVisitor } from "./api";

const [View, setView] = useState(false);

const Visitor = () => {
  const [visitorRequest, setVisitorRequest] = useState({});
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setVisitorRequest({
      ...visitorRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveVisitor = async () => {
    setIsLoading(true);
    try {
      await saveVisitor(visitorRequest);
      alert("Visitor data saved successfully!");
    } catch (error) {
      alert("Failed to save visitor data.");
    }
    setIsLoading(false);
  };

  const handleShowVisitor = async () => {
    setIsLoading(true);
    try {
      const count = await showVisitor(visitorRequest);
      setVisitorCount(count);
    } catch (error) {
      alert("Failed to fetch visitor data.");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Visitor Management</h1>
      <input
        type="text"
        name="someProperty"
        value={visitorRequest.someProperty || ""}
        onChange={handleChange}
      />
      <button onClick={handleSaveVisitor} disabled={isLoading}>
        Save Visitor
      </button>
      <button onClick={handleShowVisitor} disabled={isLoading}>
        Show Visitor Count
      </button>
      <p>Visitor Count: {visitorCount}</p>
    </div>
  );
};
export default Visitor;
