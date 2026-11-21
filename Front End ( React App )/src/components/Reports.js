import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "../assets/css/reports.css";
//import "../assets/css/dashboard.css";
import "../assets/css/sidebar.css";

import Sidebar from "./Sidebar";

const Reports = () => {
  const [entries, setEntries] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    const fetchEntries = async () => {
      const userEmail = localStorage.getItem("userEmail"); // checking unauthorized access
  
      if (!userEmail) {
        alert("User not logged in. Please login to view reports.");
        return;
      }
  
      try {
        const response = await axios.get(
          `http://localhost:8080/timer/user-timers?email=${userEmail}`
        );
        setEntries(response.data);
        prepareChartData(response.data);
      } catch (error) {
        console.error("Error fetching timer entries:", error);
      }
    };

    fetchEntries();
  }, []);

  const prepareChartData = (data) => {
    if (!data || data.length === 0) {
      setChartData({
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
          },
        ],
      });
      return;
    }

    const categoryDurations = data.reduce((acc, entry) => {
      acc[entry.category] = (acc[entry.category] || 0) + entry.duration;
      return acc;
    }, {});

    const labels = Object.keys(categoryDurations);
    const durations = Object.values(categoryDurations);

    setChartData({
      labels,
      datasets: [
        {
          data: durations,
          backgroundColor: [
            "#EE7100", // using OTH colors
            "#FF9331", 
            "#FFB069",  
            "#FFCB9C",  
            "#FFE0C3",  
          ],
        },
      ],
    });
  };

  return (
    
    <div className="reports-sidebar">
    <div className="sidebar-div">
    <Sidebar />
    </div>
    
    <div className="reports-container">
      <div className="nav-bar">
      <header>
          <h1>Time Tracking Report</h1>
          <button
            onClick={() =>
              window.open(`http://localhost:8080/timer/generate-report?email=${localStorage.getItem("userEmail")}`)
            }
          >
            Download PDF
          </button>
        </header>
      </div>
      <main className="main-content-reports">
        

        {/* Pie Chart */}
        <section className="chart-section">
          <Pie data={chartData || {}} />
          <p>Time Distribution by Category</p>
        </section>

        {/* Data Table */}
        <section className="table-section">
          <table>
            <thead>
              <tr>
                <th>Task Title</th>
                <th>Date</th>
                <th>Category</th>
                <th>Duration</th>
                <th>Description/Remarks</th>
              </tr>
            </thead>
            <tbody>
              {entries && entries.length > 0 ? (
                entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.title}</td>
                    <td>
                      {entry.timestamp
                        ? new Date(entry.timestamp).toLocaleDateString("en-US")
                        : "N/A"}
                    </td>
                    <td>{entry.category}</td>
                    <td>
                      {entry.duration
                        ? new Date(entry.duration * 1000)
                            .toISOString()
                            .slice(11, 19)
                        : "N/A"}
                    </td>
                    <td>{entry.remarks}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
    </div>
  );
};

export default Reports;
