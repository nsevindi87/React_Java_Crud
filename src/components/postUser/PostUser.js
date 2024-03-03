import { Button } from '@mui/base'
import { Typography, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./PostUser.css"

const PostUser = () => {
    const [formData, setFormData] =useState({
        username:"",
        email:"",
        address:"",
        phoneNumber:"" 
    })

    const navigate = useNavigate()

    const handleInputChange =(event)=>{
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            console.log(formData)
            const response = await fetch("http://localhost:8080/api/user",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                }, 
                body:JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className='center-form'>
                <Typography variant='h4' gutterBottom>
                    Create New User
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        type="text"
                        name="username"
                        variant="filled"
                        fullWidth
                        margin="normal" 
                        value={formData.username}
                        onChange={handleInputChange}
                        />

                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        variant="filled"
                        fullWidth
                        margin="normal" 
                        value={formData.email}
                        onChange={handleInputChange}
                        />

                    <TextField
                        label="Phone Number"
                        type="text"
                        name="phoneNumber"
                        variant="filled"
                        fullWidth
                        margin="normal" 
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        />

                    <TextField
                        label="Address"
                        type="text"
                        name="address"
                        variant="filled"
                        fullWidth
                        margin="normal"
                        value={formData.address}
                        onChange={handleInputChange}
                        />
                    
                    <Button className='btn' variant="contained" color='primary' type='submit' fullWidth>Post user</Button>

                </form>
            </div>

        </>
    )
}

export default PostUser