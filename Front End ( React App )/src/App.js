import React from 'react';
import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Admin } from './components/Admin';
import { useState } from 'react';


function App() {
    const [userRole, setuserRole] = useState("");
    return (
        <div className="App" >
            <BrowserRouter >
            <Routes>
            <Route path='/' element={<Login setuserRole={setuserRole}/>} />
            
            <Route path='/admin' element={userRole ==='Admin'? (<Admin />) : (<Navigate to="/" replace /> ) } />
            <Route path='/register' element={<Register />}/>
            <Route path='/dashboard' element={ <Dashboard />}  />
            <Route path='/reports' element={<Reports />} />
            
            </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;