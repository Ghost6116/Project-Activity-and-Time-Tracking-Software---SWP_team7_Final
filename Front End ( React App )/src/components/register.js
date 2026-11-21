import React, { useState } from 'react';
import '../assets/css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register(props) {
    
    const [username,setusername]=useState("")
    const [useremail,setemail]=useState("")
    const [userpassword,setpassword]=useState("")
    const [error, setError] = useState("");
    const navigate = useNavigate()
    
 
    function OnSignup(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Email Validation using Regex
        if (!emailRegex.test(useremail)) {
        alert("Please enter a valid email address.");
        return;
        }

        if(username.length===0){
            alert('Username is Required')
            return
        }
        // Password Validation using Regex
        if (!passwordRegex.test(userpassword)) {
            alert(
              "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
            );
            return;
        }
        if (userpassword.length === 0) {
        alert("Password is required");
        return;
        }
        axios.post("http://localhost:8080/user/register-user", {
            name: username,
            email: useremail,
            password: userpassword,
            role: 'worker',
        })
        .then(response => {
            setError("");
            alert(response.data.message || "User registered successfully!");
            localStorage.setItem("userEmail", useremail);
            localStorage.setItem("userRole", 'worker');
            

            setError(""); // Clearing previous error message
            navigate("/dashboard");
            
        })
        .catch(error => {
            console.log(error.response);
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error); 
            } else { 
                console.log(error)
            }
    } );
    }
    return ( 
    <div className="loginPanel">

    <div className="login-container">
        <h2>Project Diary Registration</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="username">Full Name</label>
                    <input type="name" id="username" placeholder="e.g  Christian Methfessel" required value={username} onChange={(e)=>{setusername(e.target.value); setError("");}}/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Enter Valid Email</label>
                    <input type="email" id="email" placeholder="abc@xyz.com" required value={useremail} onChange={(e)=>{setemail(e.target.value); setError("");}}/>
                    {/* Inline Error */}
                    {error && <p id="error-message" style={{ color: "red", marginTop: "5px" }}>{error}</p>}
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" placeholder="Enter Your Password" required value={userpassword} onChange={(e)=>{setpassword(e.target.value); setError("");}}/>
                </div>
    <Link>
        <button type="button" className="login-btn" onClick={OnSignup}>Signup</button>
    </Link>
    </form>
  </div>
</div>
    );
}

export default Register;
