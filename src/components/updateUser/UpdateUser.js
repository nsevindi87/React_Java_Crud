import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material'

const UpdateUser = () => {

  const id = useParams()
  const [user, setUser] =useState({
    username:"",
    email:"",
    address:"",
    phoneNumber:"" 
})

const navigate = navigate()

const fetchUserById = async (userId)=>{
  try {
    const response = await fetch(`http://localhost:8080/api/user/${userId}`)
    const result = await response.json();
    setUser(result)
  } catch (error) {
    console.error(error);
  }
}

  return (
    <>
            <div className='center-form'>
                <Typography variant='h4' gutterBottom>
                    Update User
                </Typography>
                <form /* onSubmit={handleSubmit} */>
                    <TextField
                        label="Username"
                        type="text"
                        name="username"
                        variant="filled"
                        fullWidth
                        margin="normal" 
                        value={user.username}
                    //    onChange={handleInputChange}
                        />

                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        variant="filled"
                        fullWidth
                        margin="normal" 
                        value={user.email}
                      //  onChange={handleInputChange}
                        />

                    <TextField
                        label="Phone Number"
                        type="text"
                        name="phoneNumber"
                        variant="filled"
                        fullWidth
                        margin="normal" 
                        value={user.phoneNumber}
                   //     onChange={handleInputChange}
                        />

                    <TextField
                        label="Address"
                        type="text"
                        name="address"
                        variant="filled"
                        fullWidth
                        margin="normal"
                        value={user.address}
                     //   onChange={handleInputChange}
                        />
                    
                    <Button className='btn' variant="contained" color='primary' type='submit' fullWidth>Post user</Button>

                </form>
            </div>

        </>
  )
}

export default UpdateUser