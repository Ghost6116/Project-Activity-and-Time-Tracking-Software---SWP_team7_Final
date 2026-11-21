import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../assets/css/admin.css";


export const Admin = () => {
    const [users, setUsers] = useState([])
    const [reloadUsers, setReloadUsers] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalTitle, setModalTitle] = useState('Add')

    const closeModal = () => {
        setIsModalOpen(false)
        setName('')
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/get-all-users')
                setUsers(response.data)
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        }

        getAllUsers()
    }, [reloadUsers])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/user/delete?id=${id}`)
            setReloadUsers(!reloadUsers)
        } catch (error) {
            console.error('Error deleting user:', error)
        }
    }

    const addEditUser = async () => {
        if (!name || !email || !password) {
            alert('All fields are required')
            return
        }

        try {
            let url = modalTitle === 'Add' ? 'http://localhost:8080/user/register-user' : 'http://localhost:8080/user/update'

            const body = {
                name,
                email,
                password,
                role: 'worker',
            }

            if (modalTitle === 'Edit') {
                body.id = id
            }

            await axios.post(url, body)
            setReloadUsers(!reloadUsers)
            closeModal()
        } catch (error) {
            console.error('Error adding user:', error)
        }
    }

    return (
        <div className="admin-page">
            <div className="sidebar-div">
            <Sidebar />
            </div>
            <div className="admin-content">
            <h1>List of Users</h1>
            <button onClick={() => { setModalTitle('Add'); setIsModalOpen(true); }}>Add New User </button>
            <div className="table-main">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{ user.id }</td>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td className="d-flex justify-content-center gap-2 border-0">
                                    <i 
                                        className="fa fa-pencil"
                                        onClick={() => { 
                                            setName(user.name)
                                            setEmail(user.email)
                                            setPassword(user.password)
                                            setId(user.id)
                                            setModalTitle('Edit')
                                            setIsModalOpen(true)
                                        }}
                                    >    
                                    </i>
                                    <i 
                                        className="fa fa-trash" 
                                        style={{ color: "#ff6600", cursor: "pointer" }} 
                                        title="Delete User"
                                        onClick={() => handleDelete(user.id)}>
                                    </i>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>        
            {isModalOpen && (
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header d-flex justify-content-between">
                                <h5 className="modal-title" id="exampleModalLabel">{modalTitle} New User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3 row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                            id="name" 
                                            placeholder="Enter your name" />
                                    </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="Enter email" 
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input 
                                                type="password" 
                                                className="form-control"
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                                id="password" 
                                                placeholder="Enter password" 
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button 
                                    type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-primary"
                                    onClick={addEditUser}
                                >
                                    { modalTitle }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}