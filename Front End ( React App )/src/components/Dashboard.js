import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../assets/css/dashboard.css";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [remarks, setRemarks] = useState("");
  const [timer, setTimer] = useState(0);       // Timer in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [entries, setEntries] = useState([]); // State for timer entries
  const timerInterval = useRef(null);
  const navigate = useNavigate()

  // get timer entries from the server based on the logged-in user's email
  const fetchEntries = async () => {
    const userEmail = localStorage.getItem("userEmail");
    if (!userEmail) {
      alert("User email not found. Please log in again.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/timer/user-timers?email=${userEmail}`);
      
      const sortedEntries = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setEntries(sortedEntries); // update entries state
    } catch (error) {
      console.error("Error fetching timer entries:", error);
    }
  };

  // get entries on component mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const startTimer = () => {
    if (timerActive) return;
    setTimerActive(true);
    timerInterval.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = async () => {
    if (!timerActive) return;
    setTimerActive(false);
    clearInterval(timerInterval.current);

    const userEmail = localStorage.getItem("userEmail"); // checking unauthorized access
    if (!userEmail) {
      alert("User email not found. Please log in again.");
      navigate("/"); // Redirect to login page
      return;
    }

    const payload = {
      title: title || null,
      description: description || null,
      remarks: remarks || null,
      category: category || null,
      duration: timer,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post(`http://localhost:8080/timer/timer-entry?email=${userEmail}`, payload); // Passing email as Query param for Backend
      alert("Timer entry saved successfully!");
      fetchEntries(); // Refresh entries after saving
    } catch (error) {
      console.error("Error saving timer entry:", error);
      alert("Failed to save timer entry. Please try again.");
    }

    setTimer(0);
  };

  

  return (
    <div className="dashboard-container">
      <Sidebar />

      {/* Main Content */}
      <main className="main-content">
        {/* Timer Section */}
        <section className="timer-section">
          <div className="timer-inputs">
            <input
              type="text"
              placeholder="Add Title"
              className="timer-title-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              className="timer-category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="frontend">Frontend Development</option>
              <option value="meeting">Team Meeting</option>
              <option value="backend">Backend Development</option>
              <option value="UI / UX">UI / UX</option>
            </select>
            <div className="timer-display">
              {new Date(timer * 1000).toISOString().substr(11, 8)}
            </div>
            {timerActive ? (
              <button className="timer-stop-btn" onClick={stopTimer}>
                Stop
              </button>
            ) : (
              <button className="timer-start-btn" onClick={startTimer}>
                Start
              </button>
            )}
          </div>
          <textarea
            placeholder="Add Description"
            className="timer-description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <textarea
            placeholder="Add Remarks"
            className="timer-remarks-input"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          ></textarea>
        </section>

        {/* Time Entries Section */}
        <div className="time-entries-main">
        <h2>Time Entries</h2>
        <section className="time-entries-section">
          {entries.length === 0 ? (
            <p>No entries yet.</p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="time-entry">
                <div className="time-entry-details">
                  <h3>{entry.title || "No Title"}</h3>
                  <p>{entry.description || "No Description"}</p>
                  <p>{entry.remarks || "No Remarks"}</p>
                  <p>Category: {entry.category || "None"}</p>
                </div>
                <div className="time-entry-info">
                  <span>{new Date(entry.duration * 1000).toISOString().substr(11, 8)}</span>
                  <span>{new Date(entry.timestamp).toLocaleString()}</span>
                </div>
              
            </div>
            
            ))
          )}
        </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
