import { Button } from '@mui/base'
import { Typography, TextField } from '@mui/material'
import React from 'react'
import "./PostUser.css"

const PostUser = () => {
    return (
        <>
            <div className='center-form'>
                <Typography variant='h4' gutterBottom>
                    Create New User
                </Typography>
                <form>
                    <TextField
                        label="Username"
                        type="text"
                        name="username"
                        variant="filled"
                        fullWidth
                        margin="normal" />

                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        variant="filled"
                        fullWidth
                        margin="normal" />

                    <TextField
                        label="Phone Number"
                        type="text"
                        name="phoneNumber"
                        variant="filled"
                        fullWidth
                        margin="normal" />

                    <TextField
                        label="Address"
                        type="text"
                        name="address"
                        variant="filled"
                        fullWidth
                        margin="normal" />
                    
                    <Button className='btn' variant="contained" color='primary' type='submit' fullWidth>Post user</Button>

                </form>
            </div>

        </>
    )
}

export default PostUser