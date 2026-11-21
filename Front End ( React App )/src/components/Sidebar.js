import { Link } from "react-router-dom"
import logo from "../assets/Logo-Uni.jpg"
//import "../assets/css/dashboard.css"
import "../assets/css/sidebar.css"


const Sidebar = () => {
    const logout = () => {
        localStorage.removeItem("userEmail"); // Clear stored email
      };
    const role = localStorage.getItem("userRole");
  return(

        <aside className="sidebar">
                <div className="sidebar-logo">
                <img src={logo} alt="Project Diary Logo" />
                <h3>Project Diary</h3>
                </div>
                <nav className="sidebar-nav">
                <Link to="/dashboard" className="sidebar-item active">
                     Time Tracking
                </Link>
                <Link to="/reports" className="sidebar-item">
                      Reports
                </Link>
                {role === "Admin" && (
                <Link to="/admin" className="sidebar-item">
                     Admin Tools
                </Link>
                )}
                <Link to="/" className="sidebar-item" onClick={logout}>
                     Logout
                </Link>
               
                </nav>
        </aside>
  );
};

export default Sidebar;